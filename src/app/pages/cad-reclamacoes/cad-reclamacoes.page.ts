import { Component, OnInit } from '@angular/core';
import {  Validators, FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { LoadingController, ToastController } from '@ionic/angular';
import { Ocorrencia } from 'src/app/core/models/ocorrencia';
import { OcorrenciaService } from 'src/app/share/utils/services/ocorrencia.service';

@Component({ 
  selector: 'app-cad-reclamacoes',
  templateUrl: './cad-reclamacoes.page.html',
  styleUrls: ['./cad-reclamacoes.page.scss'],
})
export class CadReclamacoesPage implements OnInit {

  constructor(private formBuilder: FormBuilder,
              private ocorrenciaService: OcorrenciaService,
              private loadingController: LoadingController,
              private toastController: ToastController,
              private router: Router,
              private activatedRoute: ActivatedRoute) { }

  formulario: FormGroup;
  ocorrencia: Ocorrencia = new Ocorrencia();
  loading: any;
  id: any;

  ngOnInit() {
    this.createForm();
    this.id = this.activatedRoute.snapshot.params['id'];
  } 

  async cadastrar(){
    this.ocorrencia = {
      autor: null,
      descricao: this.formulario.get('descricaoReclamacao').value,
      linkArquivo: null,
      status: null,
      titulo: this.formulario.get('tituloReclamacao').value
    }

    try {
      await this.presentLoading();
      this.ocorrenciaService.cadastrarMudanca(this.ocorrencia)
        .subscribe(complete => {
          console.log(complete.status);
          this.presentToastSuccess();
          this.router.navigate(['visualizar-ocorrencia', this.id]);
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
      tituloReclamacao: ['', Validators.required],
      descricaoReclamacao: ['', Validators.required],
      fotoReclamacao: [''],
    });
  }

}
