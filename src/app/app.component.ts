import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MenuController } from '@ionic/angular';
import { AutentiticacaoService } from './share/utils/services/autentiticacao.service';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Inicio', url: 'folder', icon: 'home' },
    { title: 'Perfil', url: 'perfil', src:"../../assets/icon/perfil-1.svg" },
    { title: 'Visualizar Mudanças', url: 'visualizar-mudanca', src:"../../assets/icon/mudanca-branco.svg" },
    { title: 'Visualizar Sugestões', url: 'visualizar-sugestao', icon: 'bulb' },
    { title: 'Cadastrar Sindico', url: 'cad-sindico', src:"../../assets/icon/sind.svg" },
    { title: 'Cadastrar Condominio', url: 'cad-condominio', src:"../../assets/icon/predio.svg" },
    { title: 'Cadastrar Documentos', url: 'documentos', src:"../../assets/icon/baixar-doc.svg" },
    { title: 'Cadastrar Reclamações', url: 'cad-reclamacoes', src:"../../assets/icon/cad-recla.svg" },
    { title: 'Cadastrar Visitante', url: 'cad-visitante', src:"../../assets/icon/cad-visit.svg" },
    { title: 'Cadastrar Encomenda', url: 'cad-encomenda', icon: 'cube' },
    { title: 'Cadastrar Colaborador', url: 'cad-colaborador', src:"../../assets/icon/cad-morador-branco.svg" },
  ];
  constructor(private authService: AutentiticacaoService,
              private router: Router,
              public menuCtrl: MenuController) {}

  logout(){
    this.authService.logout();
    this.menuCtrl.close();
  }
}
