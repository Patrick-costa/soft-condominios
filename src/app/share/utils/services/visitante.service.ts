import { Injectable } from '@angular/core';
import { tap, finalize, mergeMap, map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';
import { ToastController } from '@ionic/angular';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class VisitanteService {

  constructor(private http: HttpClient,
              private toastController: ToastController,
              private router: Router) { }

  cadastrarVisitante(visitante: any) {
    return this.http.post(`${environment.baseUrl}/visitantes`, visitante, {
      observe: 'response',
      responseType: 'text'
    }).pipe(
      tap(response => {
        console.log(response)
      })
    );
  }

  atualizarVisitante(id: any, visitante, condominioId) {
    return this.http.put(`${environment.baseUrl}/visitantes/` + id, visitante).subscribe(x => {
      console.log(x);
      this.toast();
      this.router.navigate(['visualizar-visitante', condominioId])
    }
    )

  }

  async toast(){
    const toast = await this.toastController.create({
      message: 'Baixa com sucesso!',
      duration: 3000,
      color: 'success'
    });
    return toast.present();
  }
}
