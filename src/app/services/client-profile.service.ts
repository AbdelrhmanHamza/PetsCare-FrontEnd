import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { REQ_API } from './enums/env';
import { TokenStorageService } from './token-storage.service';

@Injectable({
  providedIn: 'root',
})
export class ClientProfileService {
  constructor(private http: HttpClient, private token: TokenStorageService) {}

  getProfile(): Observable<any>{
    return this.http.get(REQ_API + 'profile/client', {
      headers: new HttpHeaders({
        Authorization: 'Bearer ' + this.token.getToken(),
        'Content-Type': 'application/json',
      }),
    });
  }
}
