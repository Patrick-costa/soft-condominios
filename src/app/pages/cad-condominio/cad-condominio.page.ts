import { Component, OnInit } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { AlertController, ToastController, LoadingController } from '@ionic/angular';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { Condominio } from '../../core/models/condominio';
import { CondominioService } from '../../share/utils/services/condominio.service';

@Component({
  selector: 'app-cad-condominio',
  templateUrl: './cad-condominio.page.html',
  styleUrls: ['./cad-condominio.page.scss'],
})
export class CadCondominioPage implements OnInit {

  constructor(private http: HttpClient,
    private alertControl: AlertController,
    private formBuilder: FormBuilder,
    private condominioService: CondominioService,
    private toastController: ToastController,
    private loadingController: LoadingController) { }

  dados: any = [];
  cep: string = '';
  formulario: FormGroup;
  condominio: Condominio = new Condominio();
  private loading: any;

  ngOnInit() {
    this.createForm();
  }

  async cadastrar() {
    const cep: string = this.formulario.get('cep').value
    
    this.condominio = {
      bairro: this.dados['bairro'],
      cep: this.dados['cep'],
      cnpj: this.formulario.get('cnpj').value,
      cidade: this.dados['localidade'],
      estado: this.dados['uf'],
      linkContrato: null,
      nomeFantasia: this.formulario.get('nomeFantasia').value,
      numero: this.formulario.get('numero').value,
      razaoSocial: this.formulario.get('razaoSocial').value,
      rua: this.dados['logradouro'],
    }

    console.log(this.condominio);
    try {
      await this.presentLoading();
      this.condominioService.cadastrarCondominio(this.condominio)
        .subscribe(complete => {
          console.log(complete.status);
          return this.presentToastSuccess();

        }, error => {
          console.log(error);
          let message: string
          let color: string
          switch (error.status) {
            case 500:
              message = 'Erro ao inserir';
              color = 'danger';
              break;

            case 403:
              message = 'Dados Inválidos';
              color = 'danger';
              break;

            case 404:
              message = 'Servidor não encontrado';
              color = 'danger';
              break;

            case 408:
              message = 'Tempo de conexão esgotado';
              color = 'danger';
              break;
          }

          this.presentToast(message, color);
        })

    }
    finally {
      this.loading.dismiss();

    }
  }

  createForm() {
    this.formulario = this.formBuilder.group({
      razaoSocial: ['', Validators.required],
      nomeFantasia: ['', Validators.required],
      cnpj: ['', Validators.required],
      cep: ['', Validators.required],
      rua: ['', Validators.required],
      cidade: ['', Validators.required],
      estado: ['', Validators.required],
      bairro: ['', Validators.required],
      numero: ['', Validators.required],
      linkContrato: ['', Validators.required],
    });
  }

  async presentLoading() {
    this.loading = await this.loadingController.create({
      message: 'Carregando...'
    });

    return this.loading.present();

  }

  async presentToast(message, color) {
    const toast = await this.toastController.create({
      message,
      color,
      duration: 3000
    });
    toast.present();
  }

  async presentToastSuccess() {
    const toast = await this.toastController.create({
      message: 'Cadastrado com Sucesso!',
      color: 'success',
      duration: 3000
    });
    toast.present();
  }

  async consultaCEP(cep) {

    //Nova variável "cep" somente com dígitos.
    cep = cep.replace(/\D/g, '');

    //Expressão regular para validar o CEP.
    if (cep != "") {
      var validacep = /^[0-9]{8}$/;

      if (validacep.test(cep)) {

        this.http.get("//viacep.com.br/ws/" + cep + "/json").subscribe(cep => {
          this.dados = JSON.stringify(cep);
          let viacep = this.dados;
          if (viacep != null) {
            this.dados = JSON.parse(viacep);
            console.log(this.dados);
          }

        });

      } else {
        const alert = await this.alertControl.create({
          header: 'Dado Inválido',
          message: 'CEP informado não é valido',
          buttons: [{
            text: 'Fechar',
            handler: () => {
              this.cep = "";
            }
          }],
        })

        await alert.present();

      }
    }

  }

}



