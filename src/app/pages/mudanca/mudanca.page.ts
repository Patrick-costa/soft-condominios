import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core';
import { AgendamentoMudanca } from 'src/app/core/models/agendamentoMudanca';
import { MudancaService } from 'src/app/share/utils/services/mudanca.service';
import * as moment from 'moment';
import { AlertController, LoadingController, ToastController } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-mudanca',
  templateUrl: './mudanca.page.html',
  styleUrls: ['./mudanca.page.scss'],
})
export class MudancaPage implements OnInit {

  constructor(private formBuilder: FormBuilder,
    private adapter: DateAdapter<any>,
    private mudancaService: MudancaService,
    private loadingController: LoadingController,
    private toastController: ToastController,
    private alertController: AlertController,
    private http: HttpClient,
    private router: Router,
    private activatedRoute: ActivatedRoute) { }

  formulario: FormGroup;
  data: any;
  loading: any;
  mudanca: AgendamentoMudanca = new AgendamentoMudanca;
  dataMudanca: string;
  horario: any = [];
  condominio: any = [];
  dados: any = [];
  id: any;

  ngOnInit() {
    this.createForm();
    this.adapter.setLocale('br')
    this.getUser()
  }

  buscarHorario() {
    return this.http.get('http://app.axdeveloper.com.br/agendamentos-mudanca/buscar-horarios?data=' + moment(this.dataMudanca).format('YYYY-MM-DD')).subscribe(x => {
      this.horario = x;
      console.log(this.horario);
    })
  }

  async cadastrar() {
    this.mudanca = {
      data: moment(this.formulario.get('diaMudanca').value).format('YYYY-MM-DD'),
      observacao: this.formulario.get('observacao').value,
      hora: this.formulario.get('horaMudanca').value
    }

    console.log(this.mudanca)

    try {
      await this.presentLoading();
      this.mudancaService.cadastrarMudanca(this.mudanca)
        .subscribe(complete => {
          console.log(complete.status);
         this.presentToastSuccess();
          this.router.navigate(['visualizar-mudanca', this.id]);
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
      diaMudanca: ['', Validators.required],
      horaMudanca: ['', Validators.required],
      observacao: ['', Validators.required]
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

  getUser() {
    this.http.get(`${environment.baseUrl}/usuarios/auth`).subscribe(x => {
      let dados = JSON.stringify(x);
      let usuario = dados;
      this.dados = JSON.parse(usuario);
      this.condominio = this.dados.condominio[0];
      this.id = this.dados['condominio'].id;
      console.log(this.id)
    });
    // console.log(this.id)
  }


}
