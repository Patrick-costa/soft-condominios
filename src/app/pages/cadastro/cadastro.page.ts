import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { MoradorService } from '../../share/utils/services/morador.service';
import { MoradorCadastro } from '../../core/models/moradorCadastro';
import { LoadingController, ToastController, AlertController } from '@ionic/angular';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { tap, finalize, mergeMap, map } from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.page.html',
  styleUrls: ['./cadastro.page.scss'],
})
export class CadastroPage implements OnInit {

  constructor(private formBuilder: FormBuilder,
    private moradorService: MoradorService,
    private loadingController: LoadingController,
    private toastController: ToastController,
    private http: HttpClient,
    private alertControl: AlertController,
    private router: Router,
  ) { }

  formulario: FormGroup;
  dados: any = [];
  condominio: any = []
  cep: string = '';
  bairro: string;
  cidade: string;
  estado: string;
  senha: string;
  confirmarSenha: string;
  private loading: any;
  morador: MoradorCadastro = new MoradorCadastro();

  ngOnInit() {
    this.createForm();
  }

  apagarSenha() {
    if (this.senha != this.confirmarSenha) {
      return this.alertControlSenha();
    }
  }

  teste() {
    console.log(this.formulario.get('condominio').value)
  }

  async cadastrar() {
    this.morador = {
      apartamento: this.formulario.get('apartamento').value,
      bloco: this.formulario.get('bloco').value,
      cpf: this.formulario.get('cpf').value,
      email: this.formulario.get('email').value,
      linkFoto: null,
      nome: this.formulario.get('nome').value,
      senha: this.formulario.get('senha').value,
      sobrenome: this.formulario.get('sobrenome').value
    }

    console.log(this.morador);
    try {
      await this.presentLoading();
      this.moradorService.cadastrarMorador(this.morador, this.formulario.get('condominio').value)
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
      this.router.navigateByUrl('login');
    }
  }

  createForm() {
    this.formulario = this.formBuilder.group({
      nome: ['', Validators.required],
      sobrenome: ['', Validators.required],
      email: ['', Validators.required],
      cpf: ['', Validators.required],
      cep: ['', Validators.required],
      estado: ['', Validators.required],
      cidade: ['', Validators.required],
      bairro: ['', Validators.required],
      condominio: ['', Validators.required],
      bloco: [''],
      apartamento: ['', Validators.required],
      senha: ['', Validators.required],
      confirmar_senha: ['', Validators.required]
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

  async alertControlSenha() {
    const alert = await this.alertControl.create({
      message: 'Senhas não conferem, favor digite novamente',
      buttons: [{
        'text': 'Ok',
        handler: () => {
          this.senha = "";
          this.confirmarSenha = "";
        }
      }]
    });

    return alert.present();

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
            this.bairro = this.dados['bairro']
            this.http.get(`${environment.baseUrl}/condominios/search?bairro=` + this.bairro).subscribe(x => {
              this.condominio = x['content'];
              console.log(this.condominio);
            })
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
