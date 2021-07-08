import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { AutentiticacaoService } from '../../share/utils/services/autentiticacao.service';
import { AccountServiceService } from '../../share/utils/services/account-service.service';
import { Router } from '@angular/router';
import { User } from '../../core/models/user';
import { LoadingController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(private formBuilder: FormBuilder,
    private autenticacao: AutentiticacaoService,
    private account: AccountServiceService,
    private router: Router,
    private toastControl: ToastController,
    private loadingController: LoadingController) { }

  public usuario: User;
  hide = true;
  private loading: any;

  formulario: FormGroup;
  teste: any;
  ngOnInit() {
    this.createForm();
  }

  async logar() {
    await this.presentLoading();
    try {
      this.autenticacao.login(this.formulario.value)
        .subscribe(complete => {
          this.router.navigate(['folder'])
          this.account.estaLogado.next(true);
        }
          , error => {
          console.log(error);
          let message: string
          switch (error.status) {
            case 401:
              message = 'Usuário ou Senha Incorretos';
              break;

            case 403:
              message = 'Usuário não autenticado';
              break;

            case 404:
              message = 'Servidor não encontrado';
              break;

            case 408:
              message = 'Tempo de conexão esgotado';
              break;
          }

          this.presentToast(message);
        })
    }
    finally {
      this.loading.dismiss();
    }
  }


  createForm() {
    this.formulario = this.formBuilder.group({
      email: ['', Validators.required],
      senha: ['', Validators.required]
    });
  }

  async presentLoading() {
    this.loading = await this.loadingController.create({
      message: 'Por favor aguarde...',
      cssClass: 'Danger'
    });
    return this.loading.present();
  }

  async presentToast(message) {
    const toast = await this.toastControl.create({
      message,
      duration: 5000,
      color: "danger"
    });
    toast.present();
  }

}
