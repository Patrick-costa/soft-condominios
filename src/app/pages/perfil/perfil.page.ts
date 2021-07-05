import { Component, OnInit } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {

  constructor(private http: HttpClient,) { }
  dados: any = [];
  condominio: any = []

  ionViewWillEnter(){
  }
  
  ngOnInit() {
    this.getUser();
  }

  // getUser(){
  //   this.http.get(`${environment.baseUrl}/usuarios/auth`).subscribe( x => {
  //     let dados = JSON.stringify(x);
  //     let usuario = dados;
  //     this.dados = JSON.parse(usuario);
  //     console.log(this.dados);

  //     this.condominio = this.dados['condominio'];
  //   })
  // }

  getUser() {
    this.http.get(`${environment.baseUrl}/usuarios/auth`).subscribe(x => {
      let dados = JSON.stringify(x);
      let usuario = dados;
      this.dados = JSON.parse(usuario);
      console.log(this.dados);
      if(this.dados['funcao']){
        this.condominio = this.dados.condominio[0];
      } else{
        this.condominio = this.dados['condominio'];
      }
    })
  }

}
