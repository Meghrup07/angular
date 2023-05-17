import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MemberService {
  public userService: string = 'user-service/api/v1';
  public institueService: string = 'institute-service/api/v1';
  constructor(private http: HttpClient) { }

  getMember() {
    const url: string = this.institueService + '/members/get/all-member-list';
    return this.http.get(url);
  }

}
