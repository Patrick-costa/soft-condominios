import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { HttpClient } from '@angular/common/http';
import { tap, finalize, mergeMap, map } from 'rxjs/operators';
import { Router } from '@angular/router';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ColaboradorService {

  constructor(private http: HttpClient,
    private router: Router) { }

  jwt = new JwtHelperService();

  cadastrarColaborador(colaborador: any) {
    return this.http.post(`${environment.baseUrl}/colaboradores`, colaborador, {
      observe: 'response',
      responseType: 'text'
    }).pipe(
      tap(response => {
        console.log(response)
      })
    );
  }

}
