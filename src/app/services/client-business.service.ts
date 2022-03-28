import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Filters } from 'app/models/filters.model';
import { Observable } from 'rxjs';
import { REQ_API } from './enums/env';
import { TokenStorageService } from './token-storage.service';
export interface IdParam {
  id: number

}
@Injectable({
  providedIn: 'root'
})
export class ClientBusinessService {

  constructor(private token: TokenStorageService, private http: HttpClient) { }
  getBusinesses(param?: Filters): Observable<any> {
    return this.http.get(
      REQ_API + 'client/request/all', {
      headers: new HttpHeaders({ 'Authorization': 'Bearer ' + this.token.getToken(), 'Content-Type': 'application/json' }),
      params: {
        address: param?.address ?? '',
        open_at: param?.open_at ?? '',
        close_at: param?.close_at ?? '',
        max_price: param?.max_price ?? '',
        type:param?.type??''
      }
    },
    );

  }

  getBusinessById(businessID: string): Observable<any> {
    return this.http.get(REQ_API + 'profile/business/details/' + businessID, {
      headers: new HttpHeaders({
        Authorization: 'Bearer ' + this.token.getToken(),
        'Content-Type': 'application/json',
      }),
    });
  }

  
}
