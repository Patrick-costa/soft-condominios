import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { tap, finalize, mergeMap, map } from 'rxjs/operators';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class EncomendaService {

  constructor(private http: HttpClient,
    private router: Router,
    private toastController: ToastController) { }
  encomenda: any = []
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

  atualizarEncomenda(id: any, encomenda, idCondominio) {
    return this.http.put(`${environment.baseUrl}/encomendas/` + id, encomenda).subscribe(x => {
      console.log(x);
      this.toast();
    }
    )

  }

  async toast(){
    const toast = await this.toastController.create({
      message: 'Encomenda Entregue',
      duration: 3000,
      color: 'success'
    });
    return toast.present();
  }
}
