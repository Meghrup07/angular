import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  public userService: string = 'user-service/api/v1';
  public institueService: string = 'institute-service/api/v1';

  constructor(private http: HttpClient) { }

  login(data: any): Observable<any> {
    const header = {
      headers: new HttpHeaders({ auth: 'true' }),
    };
    const url: string = this.userService + '/user/login';
    return this.http.post(url, data, header);
  }

}
