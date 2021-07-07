import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
})
export class FolderPage implements OnInit {
  public folder: string;
  dados: any = [];
  funcao: string;
  sindicoList: any = [];
  condominio: any = []
  idCondominio: any;

  constructor(private activatedRoute: ActivatedRoute,
              private http: HttpClient) { }

  ngOnInit() {
    this.folder = this.activatedRoute.snapshot.paramMap.get('id');
  }
  
  ionViewWillEnter() {
    this.getUser();
  }

  getUser() {
    this.http.get(`${environment.baseUrl}/usuarios/auth`).subscribe(x => {
      let dados = JSON.stringify(x);
      let usuario = dados;
      this.dados = JSON.parse(usuario);
      console.log(this.dados);
      if(this.dados['funcao']){
        this.condominio = this.dados.condominio[0];
        this.funcao = this.dados['funcao'];
        this.idCondominio = this.condominio['id'];
      } else{
        this.condominio = this.dados['condominio'];
        this.idCondominio = this.condominio['id'];
      }
    })
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


}
