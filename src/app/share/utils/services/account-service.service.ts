import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { StorageService } from './storage.service';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AccountServiceService {
  public exibirMenu = new BehaviorSubject<boolean>(false);
  public estaLogado = new BehaviorSubject<boolean>(false);
  
  constructor(
    private http: HttpClient,
    private storage: StorageService
   
  ) { }
  

  

  public findByPerfil(usuario: any){
    return this.http.get<any>(`${environment.baseUrl}/usuarios/perfil?value=${usuario}`);
  }



  public getUserLoggedIn(){
    return true;
    // const token = this.storage.getAuthorizationToken();
    // if(token != null && !this.jwt.isTokenExpired(token)){
    //   return true
    // }
    // return false
  }
}
