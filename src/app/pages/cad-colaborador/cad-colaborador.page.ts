import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { ColaboradorService } from '../../share/utils/services/colaborador.service';
import { Router } from '@angular/router';
import { Colaborador } from '../../core/models/colaborador';
import { ToastController, LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-cad-colaborador',
  templateUrl: './cad-colaborador.page.html',
  styleUrls: ['./cad-colaborador.page.scss'],
})
export class CadColaboradorPage implements OnInit {

  constructor(private formBuilder: FormBuilder,
              private colaboradorService: ColaboradorService,
              private router: Router,
              private toastController: ToastController,
              private loadingController: LoadingController
               ) { }

  formulario: FormGroup
  colaborador: Colaborador = new Colaborador();
  private loading: any;

  ngOnInit() {
    this.createForm();
  }

  async cadastrar() {
    this.colaborador = {
      nome:this.formulario.get('nome').value,
      sobrenome: this.formulario.get('sobrenome').value,
      cpf: this.formulario.get('cpf').value,
      email: this.formulario.get('email').value,
      funcao: this.formulario.get('email').value,
      linkFoto: null,
      ocorrencia: null,
      id: null,
      status: null,
      usuario: null,
      login: this.formulario.get('email').value,
    };

    try{
      await this.presentLoading();
      this.colaboradorService.cadastrarColaborador(this.formulario.value)
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
  
          this.presentToast(message,color);
        })

    }
    finally{
      this.loading.dismiss();

    }

  }

  createForm() {
    this.formulario = this.formBuilder.group({
      nome: ['', Validators.required],
      sobrenome: ['', Validators.required],
      email: ['', Validators.required],
      cpf: [''],
      funcao: ['', Validators.required],
      senha: ['', Validators.required],
    });
  }

  async presentLoading(){
    this.loading = await this.loadingController.create({
      message: 'Carregando...'
    });

    return this.loading.present();

  }

  async presentToast(message,color){
    const toast = await this.toastController.create({
      message,
      color,
      duration: 3000
    });
    toast.present();
  }

  async presentToastSuccess(){
    const toast = await this.toastController.create({
      message: 'Cadastrado com Sucesso!',
      color: 'success',
      duration: 3000
    });
    toast.present();
  }
}
