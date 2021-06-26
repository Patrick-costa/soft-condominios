import { Injectable } from '@angular/core';
import {  catchError, finalize, timeout, delay } from 'rxjs/operators';

import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HTTP_INTERCEPTORS,
  HttpResponse,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { AccountService } from 'src/app/shared/utils/services/account.service';
import { ProprietarioService } from 'src/app/modules/proprietarios/services/proprietario.service';


@Injectable()
export class ErrorInterceptor implements HttpInterceptor {



  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
     
      
    return next.handle(request)
      .pipe(
        catchError(this.handleError));
  }
  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      
      console.error('Ocorreu um erro no servidor:', error.error.message);
    } else {
      let erro;
      switch (error.status){
        case 401 :
           erro = JSON.parse(error.error);
          console.error(
            `Codigo de erro: ${error.status}, ` +
            `Mensagem: ${erro.msg }`);
            break;
        case 403:
           erro = JSON.stringify(error.error);
          console.error(
            `Codigo de erro: ${error.status}, ` +
            `Mensagem: ${JSON.parse(erro).msg }`);  
            break;
        default:
          erro = JSON.stringify(error.error);
          console.error(
            `Codigo de erro: ${error.status}, ` +
            `Mensagem: ${erro }`); 
      }

      
    }
 
    return throwError(
      'Algo ruím aconteceu; por favor, tente novamente mais tarde.');
  };

  
}
export const ErrorInterceptorProvider = {
  provide: HTTP_INTERCEPTORS,
  useClass: ErrorInterceptor,
  multi: true,
};
