import { HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { LocalStorageService } from './../services/local-storage.service';

@Injectable()
export class HttpInterceptorInterceptor implements HttpInterceptor {

  constructor(private localService: LocalStorageService) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let url = environment.apiUrl;
    const token = this.localService.getItem('token')
    const headersObj: any = { Accept: "application/json" };
    url = url + request.url;
    if (request.headers.get('auth') === 'true') {
      delete headersObj.Authorization;
    }
    else {
      headersObj.Authorization = 'Bearer ' + token;
    }
    const reqUrl = request.url;
    return next.handle(request.clone({
      url,
      headers: new HttpHeaders(headersObj)
    }))
  }
}
