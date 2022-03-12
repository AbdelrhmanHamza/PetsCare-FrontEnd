import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { REQ_API } from './enums/env';
import { TokenStorageService } from './token-storage.service';

@Injectable({
  providedIn: 'root',
})
export class BusinessImagesService {
  constructor(private http: HttpClient, private token: TokenStorageService) {}

  getImages(id: string): Observable<any> {
    return this.http.get(REQ_API + 'profile/business/image/show/' + id, {
      headers: new HttpHeaders({
        Authorization: 'Bearer ' + this.token.getToken(),
        'Content-Type': 'application/json',
      }),
    });
  }
  upload(file: any, id: string): Observable<any> {
    const formData = new FormData();
    formData.append('business_profile_id', id);
    formData.append('file', file, file.name);

    return this.http.post(REQ_API + 'profile/business/image/upload', formData, {
      headers: new HttpHeaders({
        Authorization: 'Bearer ' + this.token.getToken(),
        accept: 'application/json',
      }),
    });
  }
  update(file: any, id: any): Observable<any> {
    const formData = new FormData();
    formData.append('id', id.toString());
    formData.append('file', file, file.name);

    return this.http.post(REQ_API + 'profile/business/image/update', formData, {
      headers: new HttpHeaders({
        Authorization: 'Bearer ' + this.token.getToken(),
        accept: 'application/json',
      }),
    });
  }

  delete(id: number): Observable<any> {
    return this.http.get(REQ_API + 'profile/business/image/delete/' + id, {
      headers: new HttpHeaders({
        Authorization: 'Bearer ' + this.token.getToken(),
        'Content-Type': 'application/json',
      }),
    });
  }
}
