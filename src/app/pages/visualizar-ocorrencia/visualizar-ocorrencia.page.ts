import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { environment } from '../../../environments/environment';
import * as moment from 'moment';

@Component({
  selector: 'app-visualizar-ocorrencia',
  templateUrl: './visualizar-ocorrencia.page.html',
  styleUrls: ['./visualizar-ocorrencia.page.scss'],
})
export class VisualizarOcorrenciaPage implements OnInit {

  constructor(private activatedRoute: ActivatedRoute,
              private http: HttpClient) { }

  id: any;
  ocorrencia: any = [];
  dataCriacao: any;
  dataFinalziado: any;
  ngOnInit() {
    this.visualizar();
  }

  visualizar(){
    this.id = this.activatedRoute.snapshot.params['id'];
    return this.http.get(`${environment.baseUrl}/ocorrencias/search?condominio=`+this.id).subscribe(x =>{
      this.ocorrencia = x['content'];
      console.log(this.ocorrencia);
      this.dataCriacao = moment(this.ocorrencia['dataCriacao']).format('DD-MM-YYYY')
    });
  }

}
