import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { environment } from '../../../../environments/environment';
import { tap, finalize, mergeMap, map } from 'rxjs/operators';
import { StorageService } from './storage.service';
import { AccountServiceService } from './account-service.service';
import { Router } from '@angular/router';
import { localUser } from '../../../core/models/localUser';
import { JwtHelperService } from "@auth0/angular-jwt";

@Injectable({
  providedIn: 'root'
})
export class AutentiticacaoService {

  email: string;
  senha: string;
  jwt = new JwtHelperService();
 


  constructor(
    private http: HttpClient,
    private storage: StorageService, 
    private account: AccountServiceService,
    private router: Router

  ) { }




  login(usuario: any) {
    return this.http.post(`${environment.baseUrl}/login`, usuario, {
      observe: 'response',
      responseType: 'text'
    }).pipe(
      tap(response => {
        console.log(response)
        this.succesfulLogin(response.headers.get('Authorization'))
      })
    );
  }

  succesfulLogin(authorizationValue: String) {
    if (authorizationValue != null) {
      let user = this.extractToken(authorizationValue.substring(7));
      this.storage.setLocalUser(user);

    }

    return null;
  }

  logout() {
    this.storage.setLocalUser(null);
    this.storage.setUser(null);
    localStorage.clear();
    this.account.estaLogado.next(false);
    this.router.navigate(['login'])

  }


  private extractToken(token: any) {
    let nome = JSON.stringify(this.jwt.decodeToken(token))
    let user: localUser = {
      nome: JSON.parse(nome).sub,
      token: token
    }
    return user;
  }

}
