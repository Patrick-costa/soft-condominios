import { Component, OnInit } from '@angular/core';
import {  Validators, FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { Visitante } from '../../core/models/visitante';
import { VisitanteService } from '../../share/utils/services/visitante.service';
import { ActivatedRoute, Router } from '@angular/router';
import { LoadingController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-cad-visitante',
  templateUrl: './cad-visitante.page.html',
  styleUrls: ['./cad-visitante.page.scss'],
})
export class CadVisitantePage implements OnInit {

  constructor(private formBuilder: FormBuilder,
              private activatedRoute: ActivatedRoute,
              private visitanteService: VisitanteService,
              private loadingController: LoadingController,
              private toastController: ToastController,
              private router: Router) { }

  formulario: FormGroup
  visitante: Visitante = new Visitante();
  id: any;
  loading: any;

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.params['id'];
    this.createForm();
  }

  async cadastrar(){
    this.visitante = {
      apartamento: this.formulario.get('apartamento').value,
      bloco: this.formulario.get('bloco').value,
      condominio: this.id,
      tipoVisitante: this.formulario.get('tipoVisitante').value,
      status: null,
      sobrenome: this.formulario.get('sobrenome').value,
      nome: this.formulario.get('nome').value,
      cpf: this.formulario.get('cpf').value,
      observacao: null
    }

    try {
      await this.presentLoading();
      this.visitanteService.cadastrarVisitante(this.visitante)
        .subscribe(complete => {
          console.log(complete);
          this.presentToastSuccess();
          this.router.navigate(['visualizar-visitante',this.id])
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


  createForm(){
    this.formulario = this.formBuilder.group({
      nome: ['', Validators.required],
      sobrenome: ['',Validators.required],
      cpf: ['', Validators.required],
      tipoVisitante: ['', Validators.required],
      bloco: ['', Validators.required],
      apartamento: ['', Validators.required],
      observacao: ['', Validators.required]
    });
  }

}
