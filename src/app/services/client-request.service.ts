import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { REQ_API } from './enums/env';
import { TokenStorageService } from './token-storage.service';
import { BusinessRequest } from 'app/models/businessRequest.mode';

@Injectable({
  providedIn: 'root',
})
export class ClientRequestService {
  constructor(private token: TokenStorageService, private http: HttpClient) {}

  getPakages(id: string): Observable<any> {
    return this.http.get(REQ_API + 'profile/business/package/' + id, {
      headers: new HttpHeaders({
        Authorization: 'Bearer ' + this.token.getToken(),
        'Content-Type': 'application/json',
      }),
    });
  }
  requestService(request: BusinessRequest): Observable<any> {
    return this.http.post(REQ_API + 'request/add', JSON.stringify(request), {
      headers: new HttpHeaders({
        Authorization: 'Bearer ' + this.token.getToken(),
        'Content-Type': 'application/json',
      }),
    });
  }
}
