import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AutentiticacaoService } from '../../share/utils/services/autentiticacao.service';
import { AccountServiceService } from '../../share/utils/services/account-service.service';

@Injectable({
  providedIn: 'root'
})
export class AutenticacaoGuard implements CanActivate {
  constructor(
    private autenticacao: AccountServiceService,
    private router: Router
  ){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

      if(this.autenticacao.getUserLoggedIn()){
        this.autenticacao.estaLogado.next(true);
        this.autenticacao.exibirMenu.next(true);
        return true;
      }

      this.autenticacao.estaLogado.next(false);
      this.autenticacao.exibirMenu.next(false);
      this.router.navigate(['login']);

      return false;
  }
  
}
