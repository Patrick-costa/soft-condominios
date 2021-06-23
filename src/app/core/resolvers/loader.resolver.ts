import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { AccountServiceService } from '../../share/utils/services/account-service.service';
import { StorageService } from '../../share/utils/services/storage.service';
import { Usuario } from '../models/usuario';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LoaderResolver implements Resolve<boolean> {
  public user: any
  constructor(
    private account: AccountServiceService,
    private storage: StorageService,
    ){}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<any> {
    this.user = this.storage.getLocalUser();
    console.log("loader");
    
    
     

    return this.account.findByPerfil(this.user.nome_usuario)
    .pipe( 
      tap( (usuarios: Usuario) => {
        this.storage.setUser(usuarios);
        
      })
      
      );
  }
}
