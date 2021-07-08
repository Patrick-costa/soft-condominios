import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MenuController } from '@ionic/angular';
import { AutentiticacaoService } from './share/utils/services/autentiticacao.service';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';
import { Subscription, Observable, BehaviorSubject } from 'rxjs';
import { AccountServiceService } from './share/utils/services/account-service.service';

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
  subscription: Subscription
  teste: Observable<String>;

  constructor(private authService: AutentiticacaoService,
              private account: AccountServiceService,
              private router: Router,
              private http: HttpClient,
              public menuCtrl: MenuController) {}

  logout(){
    this.authService.logout();
    this.menuCtrl.close();
    this.ngOnDestroy();
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }

  ngOnInit() {
    this.getUser();
    this.teste = this.account.permissoes
  }

  getUser() {
    this.subscription = this.http.get(`${environment.baseUrl}/usuarios/auth`).subscribe(x => {
      let dados = JSON.stringify(x);
      let usuario = dados;
      this.dados = JSON.parse(usuario);
      let permissoes: Array<any> = this.dados['usuario'].grupoPermissao;
      permissoes.forEach( data => {
        switch(data.descricao){
          case 'Morador':
          this.account.permissoes.next(data.descricao);
          case 'Sindico':
          this.account.permissoes.next(data.descricao);
          case 'Porteiro':
          this.account.permissoes.next(data.descricao);
          case 'Zelador':
          this.account.permissoes.next(data.descricao);

          default: 
          this.account.permissoes.next('Morador');
        }
      })
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
