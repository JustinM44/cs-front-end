import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable()
export class AuthInterceptorService implements HttpInterceptor{

constructor() { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let token;
    if(localStorage.getItem('token')){
      token = localStorage.getItem('token');
      let authReq = req.clone(
        {headers: req.headers.set('Authorization', 'Bearer '+token)}
      );
      return next.handle(authReq);
    }else{
      return next.handle(req);
    }
      
  
  }

}
