import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Home', url: '/folder', icon: 'home' },
    { title: 'Login', url: '/login', icon: 'log-in' },
    { title: 'Cadastro', url: '/cadastro', icon: 'heart' },
    { title: 'Sindico', url: '/cad-sindico', icon: 'archive' },
    { title: 'Condominio', url: 'cad-condominio', icon: 'trash' },
    { title: 'Documentos', url: '/documentos', icon: 'archive' },
    { title: 'Cadastrar Reclamações', url: 'cad-reclamacoes', icon: 'alert' },
    { title: 'Spam', url: '/folder/Spam', icon: 'warning' },
    { title: 'Spam', url: '/folder/Spam', icon: 'warning' },
    { title: 'Spam', url: '/folder/Spam', icon: 'warning' },
  ];
  constructor() {}
}
