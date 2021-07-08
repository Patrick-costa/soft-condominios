import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { tap, finalize, mergeMap, map } from 'rxjs/operators';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class OcorrenciaService {

  constructor(private http: HttpClient) { }

  cadastrarMudanca(ocorrencia) {
    return this.http.post(`${environment.baseUrl}/ocorrencias`, ocorrencia, {
      observe: 'response',
      responseType: 'text'
    }).pipe(
      tap(response => {
        console.log(response)
      })
    );
  }

  enviarMensagem(mensagem, id: any){
    return this.http.post(`${environment.baseUrl}/ocorrencias/`+id+'/comentario', mensagem, {
      observe: 'response',
      responseType: 'text'
    }).pipe(
      tap(response => {
        console.log(response)
      })
    );
  }

  
}
