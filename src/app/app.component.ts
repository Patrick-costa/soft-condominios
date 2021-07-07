import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MenuController } from '@ionic/angular';
import { AutentiticacaoService } from './share/utils/services/autentiticacao.service';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  dados: any = [];
  funcao: string;
  sindicoList: any = [];
  condominio: any = []
  id: number;
  id2: number;

  constructor(private authService: AutentiticacaoService,
              private router: Router,
              private http: HttpClient,
              public menuCtrl: MenuController) {}

  logout(){
    this.authService.logout();
    this.menuCtrl.close();
    // this.funcao == "";
  }

  ngOnInit() {
    this.getUser();
  }

  getUser() {
    this.http.get(`${environment.baseUrl}/usuarios/auth`).subscribe(x => {
      let dados = JSON.stringify(x);
      let usuario = dados;
      this.dados = JSON.parse(usuario);
      if(this.dados['funcao']){
        this.condominio = this.dados.condominio[0];
        this.funcao = this.dados['funcao'];
        this.id = this.condominio['id'];
        this.id2 = this.id;
      } else{
        this.condominio = this.dados['condominio'];
        this.id = this.condominio['id'];
      }
    })
  }
}
