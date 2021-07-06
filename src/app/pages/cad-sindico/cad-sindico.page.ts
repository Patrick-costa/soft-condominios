import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { SindicoService } from '../../share/utils/services/sindico.service';
import { Router } from '@angular/router';
import { Colaborador } from '../../core/models/colaborador';
import { ToastController, LoadingController, AlertController } from '@ionic/angular';

@Component({
  selector: 'app-cad-sindico',
  templateUrl: './cad-sindico.page.html',
  styleUrls: ['./cad-sindico.page.scss'],
})
export class CadSindicoPage implements OnInit {

  constructor(private formBuilder: FormBuilder,
    private sindicoService: SindicoService,
    private router: Router,
    private toastController: ToastController,
    private loadingController: LoadingController,
    private alertController: AlertController
  ) { }

  formulario: FormGroup
  sindico: Colaborador = new Colaborador();
  private loading: any;
  senha: string;
  confirmarSenha: string;

  ngOnInit() {
    this.createForm();
  }

  apagarSenha() {
    if (this.senha != this.confirmarSenha) {
      return this.alertControl();
    }
  }

  async alertControl() {
    const alert = await this.alertController.create({
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

  async cadastrar() {
    this.sindico = {
      nome: this.formulario.get('nome').value,
      sobrenome: this.formulario.get('sobrenome').value,
      cpf: this.formulario.get('cpf').value,
      email: this.formulario.get('email').value,
      funcao: null,
      condominio: null,
      linkFoto: null,
      status: null,
      senha: this.formulario.get('senha').value,
      login: this.formulario.get('email').value
    };

    try {
      await this.presentLoading();
      console.log(this.sindico)
      this.sindicoService.cadastrarColaborador(this.sindico)
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
      nome: ['', Validators.required],
      sobrenome: ['', Validators.required],
      cpf: ['', Validators.required],
      email: ['', Validators.required],
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

}
