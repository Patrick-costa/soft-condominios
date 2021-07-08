import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import * as moment from 'moment';
import { VisitanteService } from '../../share/utils/services/visitante.service';

@Component({
  selector: 'app-visualizar-visitante',
  templateUrl: './visualizar-visitante.page.html',
  styleUrls: ['./visualizar-visitante.page.scss'],
})
export class VisualizarVisitantePage implements OnInit {

  constructor(private activatedRoute: ActivatedRoute,
              private http: HttpClient,
              private visitanteService: VisitanteService) { }

  id: any;
  visitante: any = [];
  dataEntrada: any =[];
  dados: any = []
  filtro: string;
  funcao: string;
  visitanteAtualizado = {};

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.params['id'];
    this.visualizar();
  }

  visualizar(){
    this.id = this.activatedRoute.snapshot.params['id'];
    return this.http.get(`${environment.baseUrl}/visitantes/search?condominio=`+this.id+'&status=true').subscribe(x =>{
      this.visitante = x['content']
      console.log(this.visitante)
      this.dataEntrada = moment(this.visitante['dataEntrada']).format('DD/MM/YYYY')
    });
  }

  alterar(id) {
    this.visitanteAtualizado = {
      status: 'false'
    }
    console.log(this.visitanteAtualizado);
    return this.visitanteService.atualizarVisitante(id, this.visitanteAtualizado)
  }

  filtrar() {
        return this.http.get(`${environment.baseUrl}/visitantes/search?condominio=` + this.id + '&status=' + this.filtro).subscribe(
        x => {
          let visitante = x
          this.visitante = visitante['content'];
          console.log(this.visitante);
          console.log(this.filtro)
        }
      )
      
    
  }

  // getUser() {
  //   this.http.get(`${environment.baseUrl}/usuarios/auth`).subscribe(x => {
  //     let dados = JSON.stringify(x);
  //     let usuario = dados;
  //     this.dados = JSON.parse(usuario);
  //     console.log(this.dados);
  //     this.funcao = this.dados.funcao;
  //     console.log(this.dados.funcao)

  //     // if(this.funcao === 'Morador'){
  //     //   return this.http.get(`${environment.baseUrl}/encomendas/moradores?condominio=` + this.id + '&status=false').subscribe(
  //     //     x => {
  //     //       let encomenda = x
  //     //       this.encomenda = encomenda['content'];
  //     //       console.log(this.encomenda);
  //     //     }
  //     //   )
  //     // }
  //     // }

  //     if (this.dados['funcao']) {
  //       this.condominio = this.dados.condominio[0];
  //       this.idCondominio = this.condominio['id'];
  //       console.log(this.idCondominio);
  //     } else {
  //       this.condominio = this.dados['condominio'];
  //       this.idCondominio = this.condominio['id'];
  //     }
  //   })
  // }

}
