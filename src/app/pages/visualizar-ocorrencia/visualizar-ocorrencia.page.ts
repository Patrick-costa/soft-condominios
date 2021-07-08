import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from '../../../environments/environment';
import { OcorrenciaService } from '../../share/utils/services/ocorrencia.service';
import * as moment from 'moment';
import { LoadingController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-visualizar-ocorrencia',
  templateUrl: './visualizar-ocorrencia.page.html',
  styleUrls: ['./visualizar-ocorrencia.page.scss'],
})
export class VisualizarOcorrenciaPage implements OnInit {

  constructor(private activatedRoute: ActivatedRoute,
              private http: HttpClient,
              private ocorrenciaService: OcorrenciaService,
              private loadingController: LoadingController,
              private toastController: ToastController,
              private router: Router ) { }

  id: any;
  idOcorrencia: any;
  ocorrencia: any = [];
  dataCriacao: any;
  dataFinalziado: any;
  mensagem: any;
  descricao = {}
  loading: any;

  ngOnInit() {
    this.visualizar();
  }

  visualizar(){
    this.id = this.activatedRoute.snapshot.params['id'];
    return this.http.get(`${environment.baseUrl}/ocorrencias/search?condominio=`+this.id).subscribe(x =>{
      this.ocorrencia = x['content'];
      console.log(this.ocorrencia);
      this.idOcorrencia = this.ocorrencia['id'];
      this.dataCriacao = moment(this.ocorrencia['dataCriacao']).format('DD-MM-YYYY')
    });
  }


  async enviarMensagens(id){

    this.descricao = {
      descricao: this.mensagem
    }

    console.log(this.descricao)
    try {
      await this.presentLoading();
      this.ocorrenciaService.enviarMensagem(this.mensagem, id)
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

  // exibirMensagens(){
  //   this.id = this.activatedRoute.snapshot.params['id'];
  //   return this.http.get(`${environment.baseUrl}/ocorrencias/search?condominio=`+this.id).subscribe(x =>{
  //     this.ocorrencia = x['content'];
  //     console.log(this.ocorrencia);
  //     this.dataCriacao = moment(this.ocorrencia['dataCriacao']).format('DD-MM-YYYY')
  //   });
  // }

}
