import { Injectable } from '@angular/core';
import { STORAGE_KEYS } from '../../../core/config/storage_keys.config';
import { localUser } from '../../../core/models/localUser';
import { Usuario } from '../../../core/models/usuario';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }


  getLocalUser(){
    let usr = localStorage.getItem(STORAGE_KEYS.localUser);
    if(usr == null){
      return null
    } else {
      return JSON.parse(usr);
    }
  }

  setLocalUser(obj: localUser){
    if (obj == null){
      localStorage.removeItem(STORAGE_KEYS.localUser);
    } else {
      localStorage.setItem(STORAGE_KEYS.localUser, JSON.stringify(obj));
    }
  }

  getAuthorizationToken(){
    if(this.getLocalUser() != null){
      let user: localUser = this.getLocalUser();
      let token = JSON.stringify(user.token);
      return token;
    }
    return null;
    
  }

  setUser(usuario: Usuario){
    if(usuario == null){
      localStorage.removeItem(STORAGE_KEYS.usuarios);
    } else {
      localStorage.setItem(STORAGE_KEYS.usuarios, JSON.stringify(usuario));
    }

  }

  getUser(){
    let user = localStorage.getItem(STORAGE_KEYS.usuarios);
    if(user == null){
      return null
    } else {
      return JSON.parse(user);
    }
  }
}
