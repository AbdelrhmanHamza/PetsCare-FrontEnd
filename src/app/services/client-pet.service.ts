import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ClientAddPetForm } from 'app/models/client-add-pet-form';
import { Observable } from 'rxjs';
import { REQ_API } from './enums/env';
import { TokenStorageService } from './token-storage.service';

@Injectable({
  providedIn: 'root'
})
export class ClientPetService {

  constructor(private token: TokenStorageService, private http: HttpClient) { }
  getPet(): Observable<any> {
    return this.http.get(
      REQ_API + 'profile/pet',
      {
        headers: new HttpHeaders({
          Authorization: 'Bearer ' + this.token.getToken(),
          'Content-Type': 'application/json',
        }),
      }
    );
  }

  addpet(pet: ClientAddPetForm): Observable<any> {
    return this.http.post(
      REQ_API + 'profile/pet/add', JSON.stringify(pet),
      {
        headers: new HttpHeaders({
          Authorization: 'Bearer ' + this.token.getToken(),
          'Content-Type': 'application/json',
        }),
      }
    );
  }
}
