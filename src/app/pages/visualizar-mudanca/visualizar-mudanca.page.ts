import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { environment } from '../../../environments/environment';
import * as moment from 'moment';

@Component({
  selector: 'app-visualizar-mudanca',
  templateUrl: './visualizar-mudanca.page.html',
  styleUrls: ['./visualizar-mudanca.page.scss'],
})
export class VisualizarMudancaPage implements OnInit {

  constructor(private activatedRoute: ActivatedRoute,
              private http: HttpClient) { }
  
  id: any;          
  mudanca: any = [];
  diaMudanca: any = [];
  ano: any = [];
  dia: any = {};
  mes: any = [];
  data: Date = new Date();
  
  ngOnInit() {
    this.visualizar();
  }

  visualizar(){
    this.id = this.activatedRoute.snapshot.params['id'];
    return this.http.get(`${environment.baseUrl}/agendamentos-mudanca/search?condominio=`+this.id).subscribe(x =>{
      this.mudanca = x['content'];
      console.log(this.mudanca)

      this.mudanca.forEach(x => {
        this.diaMudanca = x['data'];
        this.diaMudanca = this.diaMudanca.split('-');
        this.ano = this.diaMudanca[0];
        this.mes = this.diaMudanca[1];
        this.dia = this.diaMudanca[2]
        console.log(this.dia);
      });
    });
  }

}
