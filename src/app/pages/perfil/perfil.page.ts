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
  usuario: string = localStorage.getItem('localUser');
  dados: any = []

  ngOnInit() {
    this.getUser();
  }

  getUser(){
    let user = JSON.parse(this.usuario);
    console.log(user['nome']);
    this.http.get(`${environment.baseUrl}/moradores/search?email=`+ user['nome']).subscribe( x => {
      this.dados = x['content'];
      console.log(this.dados);
    })
  }

}
