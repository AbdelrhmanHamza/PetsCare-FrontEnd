import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TokenStorageService } from './token-storage.service';
import { Observable } from 'rxjs';

const AUTH_API = 'http://petscare.test:8089/api/';

@Injectable({
  providedIn: 'root',
})
export class BusinessProfileService {
  constructor(private http: HttpClient, private token: TokenStorageService) {}

  getBusinesses(): Observable<any> {
    return this.http.get(AUTH_API + 'profile/user', {
      headers: new HttpHeaders(
        {
        Authorization: 'Bearer ' + this.token.getToken(),
        'Content-Type': 'application/json',
      }),
    });
  }
  getRequests():Observable<any>{
    return this.http.get(AUTH_API + 'business/request', {
      headers: new HttpHeaders(
        {
        Authorization: 'Bearer ' + this.token.getToken(),
        'Content-Type': 'application/json',
      }),
    });
  }
  getSubscribtions(businessID:number):Observable<any>{
    return this.http.get(AUTH_API + 'profile/business/'+businessID+'/package/all', {
      headers: new HttpHeaders(
        {
        Authorization: 'Bearer ' + this.token.getToken(),
        'Content-Type': 'application/json',
      }),
    });
  }
}
