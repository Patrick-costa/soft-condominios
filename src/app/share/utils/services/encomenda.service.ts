import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { tap, finalize, mergeMap, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class EncomendaService {

  constructor(private http: HttpClient) { }

  cadastrarEncomenda(encomenda) {
    return this.http.post(`${environment.baseUrl}/encomendas`, encomenda, {
      observe: 'response',
      responseType: 'text'
    }).pipe(
      tap(response => {
        console.log(response)
      })
    );
  }
}
