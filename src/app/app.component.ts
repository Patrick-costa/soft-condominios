import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Inicio', url: 'folder', icon: 'home' },
    { title: 'Perfil', url: 'perfil', src:"../../assets/icon/perfil-1.svg" },
    { title: 'Sindico', url: 'cad-sindico', src:"../../assets/icon/sind.svg" },
    { title: 'Condominio', url: 'cad-condominio', src:"../../assets/icon/predio.svg" },
    { title: 'Cadastrar Documentos', url: 'documentos', src:"../../assets/icon/baixar-doc.svg" },
    { title: 'Cadastrar Reclamações', url: 'cad-reclamacoes', src:"../../assets/icon/cad-recla.svg" },
    { title: 'Cadastrar Visitante', url: 'cad-visitante', src:"../../assets/icon/cad-visit.svg" },
  ];
  constructor() {}
}
