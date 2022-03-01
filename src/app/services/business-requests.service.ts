import { HttpClient, HttpHeaders } from '@angular/common/http';
import { TokenStorageService } from 'src/app/services/token-storage.service';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { REQ_API } from './enums/env';


@Injectable({
  providedIn: 'root'
})
export class BusinessRequestsService {

  constructor(private token:TokenStorageService ,private http:HttpClient ){}

  getRequests(): Observable<any> {
    return this.http.get(REQ_API + 'business/request', {
      headers: new HttpHeaders({
        Authorization: 'Bearer ' + this.token.getToken(),
        'Content-Type': 'application/json',
      }),
    });
  }

}
