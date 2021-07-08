import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { StorageService } from './storage.service';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { JwtHelperService } from '@auth0/angular-jwt';
import { NewColaborador } from 'src/app/core/models/newColaborador';

@Injectable({
  providedIn: 'root'
})
export class AccountServiceService {
  public exibirMenu = new BehaviorSubject<boolean>(false);
  public estaLogado = new BehaviorSubject<boolean>(false);
  public permissoes = new BehaviorSubject<String>('Morador');
  
  jwt = new JwtHelperService();
  
  constructor(
    private http: HttpClient,
    private storage: StorageService
   
  ) { }
  

  

  public findByPerfil(usuario: any){
    return this.http.get<any>(`${environment.baseUrl}/usuarios/perfil?value=${usuario}`);
  }

  public getUser() {
    return this.http.get(`${environment.baseUrl}/usuarios/auth`);
  }


  public getUserLoggedIn(){
    
    const token = this.storage.getAuthorizationToken();
    if(token != null && !this.jwt.isTokenExpired(token)){
      return true
    }
    return false
  }
}
