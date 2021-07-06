import { Component, OnInit } from '@angular/core';
import {  Validators, FormBuilder, FormGroup } from '@angular/forms';
import { EncomendaService } from '../../share/utils/services/encomenda.service';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { LoadingController, ToastController } from '@ionic/angular';
import { Encomenda } from '../../core/models/encomenda';

@Component({
  selector: 'app-cad-encomenda',
  templateUrl: './cad-encomenda.page.html',
  styleUrls: ['./cad-encomenda.page.scss'],
})
export class CadEncomendaPage implements OnInit {

  constructor(private formBuilder: FormBuilder,
              private encomendaService: EncomendaService,
              private http: HttpClient,
              private toastController: ToastController,
              private loadingController: LoadingController) { }

  formulario: FormGroup;
  loading: any;
  encomenda: Encomenda = new Encomenda();

  ngOnInit() {
    this.createForm();
  }

  async cadastrar(){
    this.encomenda = {
      descricao: this.formulario.get('descricao').value,
      destinatario: this.formulario.get('destinatario').value
    }
    console.log(this.encomenda);

    try {
      await this.presentLoading();
      this.encomendaService.cadastrarEncomenda(this.encomenda)
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

  createForm(){
    this.formulario = this.formBuilder.group({
      destinatario: ['', Validators.required],
      descricao: ['', Validators.required],
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
