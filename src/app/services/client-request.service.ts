import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { REQ_API } from './enums/env';
import { TokenStorageService } from './token-storage.service';
import { ClientRequestServiceModel } from 'app/models/client-request-service.model';

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
  requestService(request: ClientRequestServiceModel): Observable<any> {
    console.log(JSON.stringify(request));

    return this.http.post(
      REQ_API + 'client/request/add',
      JSON.stringify(request),
      {
        headers: new HttpHeaders({
          Authorization: 'Bearer ' + this.token.getToken(),
          'Content-Type': 'application/json',
        }),
      }
    );
  }
}
