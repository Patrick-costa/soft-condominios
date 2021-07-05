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
