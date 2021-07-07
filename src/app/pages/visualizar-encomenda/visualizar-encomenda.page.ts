import { Component, OnInit } from '@angular/core';
import { EncomendaService } from '../../share/utils/services/encomenda.service';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { LoadingController, ToastController } from '@ionic/angular';
import { environment } from '../../../environments/environment';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-visualizar-encomenda',
  templateUrl: './visualizar-encomenda.page.html',
  styleUrls: ['./visualizar-encomenda.page.scss'],
})
export class VisualizarEncomendaPage implements OnInit {

  constructor(
    private encomendaService: EncomendaService,
    private http: HttpClient,
    private activatedRoute: ActivatedRoute,) { }

  id: any;
  encomenda: any = []
  morador: any = []
  dados: any = [];
  condominio: any[];
  idCondominio: any;
  filtro: any;
  funcao: string;
  encomendaAtualizada = {};

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.params['id'];
  }

  ionViewWillEnter() {
    this.getUser();
  }

  alterar(id, descricao, destinatario) {
    this.encomendaAtualizada = {
      destinatario: destinatario,
      descricao: descricao,
      status: 'true'
    }
    console.log(this.encomendaAtualizada);
    return this.encomendaService.atualizarEncomenda(id, this.encomendaAtualizada, this.idCondominio)
  }



  filtrar() {
    if (this.filtro == 'true') {
      if(this.funcao === 'Porteiro' || this.funcao === 'Zelador'){
        return this.http.get(`${environment.baseUrl}/encomendas/search?condominio=` + this.id + '&status=' + this.filtro).subscribe(
        x => {
          let encomenda = x
          this.encomenda = encomenda['content'];
          console.log(this.encomenda);
          console.log(this.filtro)
        }
      )
      } else {
        this.http.get(`${environment.baseUrl}/encomendas/moradores?condominio=` + this.id + '&status=true').subscribe(
          x => {
            let encomenda = x
            this.encomenda = encomenda['content'];
            console.log(this.encomenda);
          }
        )
      }
    }

    else if (this.filtro == 'false') {
      if(this.funcao === 'Porteiro' || this.funcao === 'Zelador'){
        return this.http.get(`${environment.baseUrl}/encomendas/search?condominio=` + this.id + '&status=' + this.filtro).subscribe(
          x => {
            let encomenda = x
            this.encomenda = encomenda['content'];
            console.log(this.encomenda);
          }
        )
      } else {
        this.http.get(`${environment.baseUrl}/encomendas/moradores?condominio=` + this.id + '&status=false').subscribe(
          x => {
            let encomenda = x
            this.encomenda = encomenda['content'];
            console.log(this.encomenda);
          }
        )
      }
    }
  }

  getUser() {
    this.http.get(`${environment.baseUrl}/usuarios/auth`).subscribe(x => {
      let dados = JSON.stringify(x);
      let usuario = dados;
      this.dados = JSON.parse(usuario);
      console.log(this.dados);
      this.funcao = this.dados.funcao;
      console.log(this.dados.funcao)

      if (this.funcao === 'Porteiro' || this.funcao == 'Zelador') {

        this.http.get(`${environment.baseUrl}/encomendas/search?condominio=` + this.id + '&status=false').subscribe(
          x => {
            let encomenda = x
            this.encomenda = encomenda['content'];
            console.log(this.encomenda);
          }
        )

      } else {
        this.http.get(`${environment.baseUrl}/encomendas/moradores?condominio=` + this.id + '&status=false').subscribe(
          x => {
            let encomenda = x
            this.encomenda = encomenda['content'];
            console.log(this.encomenda);
          }
        )
      }



      // if(this.funcao === 'Morador'){
      //   return this.http.get(`${environment.baseUrl}/encomendas/moradores?condominio=` + this.id + '&status=false').subscribe(
      //     x => {
      //       let encomenda = x
      //       this.encomenda = encomenda['content'];
      //       console.log(this.encomenda);
      //     }
      //   )
      // }
      // }

      if (this.dados['funcao']) {
        this.condominio = this.dados.condominio[0];
        this.idCondominio = this.condominio['id'];
        console.log(this.idCondominio);
      } else {
        this.condominio = this.dados['condominio'];
        this.idCondominio = this.condominio['id'];
      }
    })
  }


}



