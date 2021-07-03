import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HTTP_INTERCEPTORS
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { API_CONFIG } from '../config/api.config';
import { StorageService } from 'src/app/share/utils/services/storage.service';

@Injectable()
export class HeadersInterceptor implements HttpInterceptor {

  constructor(private storage: StorageService) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let localUser = this.storage.getLocalUser();
    let N = API_CONFIG.baseurl.length;
    let requestToAPI = request.url.substring(0, N) == API_CONFIG.baseurl;
    console.log(requestToAPI);
    if (localUser && requestToAPI){
      console.log(request.headers);
      const authReq = request.clone({
        headers: request.headers.set('Authorization', `Bearer ${localUser.token}`)
      });
      return next.handle(authReq);
    } else {
      return next.handle(request);
    }
    
  }
}
export const HeadersInterceptorProvider = {
  provide: HTTP_INTERCEPTORS,
  useClass: HeadersInterceptor,
  multi: true,
};
