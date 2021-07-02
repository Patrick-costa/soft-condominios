import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { HttpClient } from '@angular/common/http';
import { StorageService } from 'src/app/share/utils/services/storage.service';
import { AccountServiceService } from 'src/app/share/utils/services/account-service.service';
import { tap, finalize, mergeMap, map } from 'rxjs/operators';
import { Router } from '@angular/router';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CondominioService {

  constructor(private http: HttpClient,
    private router: Router) { }


  cadastrarCondominio(condominio) {
    return this.http.post(`${environment.baseUrl}/condominios`, condominio, {
      observe: 'response',
      responseType: 'text'
    }).pipe(
      tap(response => {
        console.log(response)
      })
    );
  }

}
