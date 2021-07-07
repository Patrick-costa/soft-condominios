import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { tap, finalize, mergeMap, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MudancaService {

  constructor(private http: HttpClient) { }

  cadastrarMudanca(agendamento) {
    return this.http.post(`${environment.baseUrl}/agendamentos-mudanca`, agendamento, {
      observe: 'response',
      responseType: 'text'
    }).pipe(
      tap(response => {
        console.log(response)
      })
    );
  }
}
