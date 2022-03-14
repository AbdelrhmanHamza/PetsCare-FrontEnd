import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TokenStorageService } from './token-storage.service';
import { Observable } from 'rxjs';
import { AddBusinessForm } from '../models/add-business-form';
import { REQ_API } from './enums/env';

@Injectable({
  providedIn: 'root',
})
export class BusinessProfileService {
  constructor(private http: HttpClient, private token: TokenStorageService) {}

  getBusinesses(): Observable<any> {
    return this.http.get(REQ_API + 'profile/user', {
      headers: new HttpHeaders({
        Authorization: 'Bearer ' + this.token.getToken(),
        'Content-Type': 'application/json',
      }),
    });
  }

  getSubscribtions(businessID: number): Observable<any> {
    return this.http.get(
      REQ_API + 'profile/business/' + businessID + '/package/all',
      {
        headers: new HttpHeaders({
          Authorization: 'Bearer ' + this.token.getToken(),
          'Content-Type': 'application/json',
        }),
      }
    );
  }
  addBusiness(business: AddBusinessForm): Observable<any> {
    return this.http.post(
      REQ_API + 'profile/business/add',
      JSON.stringify(business),
      {
        headers: new HttpHeaders({
          Authorization: 'Bearer ' + this.token.getToken(),
          'Content-Type': 'application/json',
        }),
      }
    );
  }
  updateBusiness(business: AddBusinessForm, id: string): Observable<any> {
    return this.http.post(
      REQ_API + 'profile/business/update/' + id,
      JSON.stringify(business),
      {
        headers: new HttpHeaders({
          Authorization: 'Bearer ' + this.token.getToken(),
          'Content-Type': 'application/json',
        }),
      }
    );
  }
  getBusinessByID(id: string): Observable<any> {
    return this.http.get(REQ_API + 'profile/business/show/' + id, {
      headers: new HttpHeaders({
        Authorization: 'Bearer ' + this.token.getToken(),
        'Content-Type': 'application/json',
      }),
    });
  }
  deleteBusiness(id: number): Observable<any> {
    return this.http.post(REQ_API + 'profile/business/delete/' + id, null, {
      headers: new HttpHeaders({
        Authorization: 'Bearer ' + this.token.getToken(),
        'Content-Type': 'application/json',
      }),
    });
  }
  public sendtokenpayment(token:any) {
    this.http.post(REQ_API + 'stripe',token)
    //post to package to back end
    
  }
}
