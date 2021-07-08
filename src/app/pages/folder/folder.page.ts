import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { NewColaborador } from 'src/app/core/models/newColaborador';
import { Condominio } from 'src/app/core/models/condominio';
import { GrupoPermissao } from 'src/app/core/models/grupoPermissao';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { Colaborador } from 'src/app/core/models/colaborador';
import { AccountServiceService } from 'src/app/share/utils/services/account-service.service';
import { Morador } from 'src/app/core/models/morador';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
})
export class FolderPage implements OnInit {
  public folder: string;
  dados: any = [];
  funcao: string;
  permissoes: GrupoPermissao[];
  sindicoList: any = [];
  condominio: Condominio = new Condominio();
  condominioList: Condominio[];
  newColaborador: NewColaborador;
  idCondominio: any;
  loading: any;
  condominioUser: any = [];

  constructor(private activatedRoute: ActivatedRoute,
    private account: AccountServiceService,
    private http: HttpClient,
    private loadingController: LoadingController) { }

  ngOnInit() {
    this.folder = this.activatedRoute.snapshot.paramMap.get('id');
    this.getUser();
  }

  pegarValor(e: any) {
    this.condominio = this.condominioList.find(x => { return x.id === e })
  }
  ionViewWillEnter() {
    this.account.estaLogado.subscribe(log => log ? this.buscandoDados() : false)
  }

  buscandoDados() {

    this.account.getUser().subscribe((data: any) => {

      data.usuario.grupoPermissao.forEach(p => {
        this.funcao = p.descricao;
      })
      if (this.funcao != "Morador") {
        if (data.condominio.length > 1) {
          this.condominioList = data.condominio
        }
        data.condominio.forEach(x => this.condominio = x);
      } else {
        this.condominio = data.condominio;
      }


      this.newColaborador = data;
    });
  }


  // getDadosSindico(){
  //   this.http.get(`${environment.baseUrl}/usuarios/auth`).subscribe(x => {
  //     let dados = JSON.stringify(x);
  //     let usuario = dados;
  //     this.dados = JSON.parse(usuario);
  //     if(this.dados['funcao'] == 'Sindico'){


  //     }
  //   })
  // }

  // getSindico(){
  //   this.http.get(`${environment.baseUrl}/colaboradores/search?condominio=`+this.condominio['id']).subscribe(x => {
  //     let dados = JSON.stringify(x);
  //     let sindico = dados;
  //     this.sindicoList = JSON.parse(sindico);
  //     console.log(this.sindicoList);
  //   })
  // }

  sliderOptions = {
    initialSlide: 0,
    slidesPerView: 1.2,
    speed: 400,
    spaceBetween: 20,
    autoplay: true,
  }

  async loadingPresent() {
    this.loading = await this.loadingController.create({
      message: 'Carregando...'
    })

    this.loading.present();
  }

  getUser() {
    this.http.get(`${environment.baseUrl}/usuarios/auth`).subscribe(x => {
      let dados = JSON.stringify(x);
      let usuario = dados;
      this.dados = JSON.parse(usuario);
      this.condominioUser = this.dados.condominio[0];
      this.idCondominio = this.condominioUser['id'];
      console.log(this.condominioUser)
    })
  }


}
