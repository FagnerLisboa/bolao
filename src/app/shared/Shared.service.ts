import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { iRound } from './Shared';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  
  constructor(private httpClient: HttpClient) { }

  getToken() {
     const  headers = new HttpHeaders({
       Authorization: `Bearer test_f7f3755a81c59d9c8ad5796b4034ac`
     });
     return headers;
  }

  getAll(): Observable<iRound[]> {
    return this.httpClient.get<iRound[]>('https://api.api-futebol.com.br/v1/campeonatos/10/rodadas', {headers: this.getToken()});
  }

  getById(id: any): Observable<iRound> {
    return this.httpClient.get<iRound>('https://api.api-futebol.com.br/v1/campeonatos/10/rodadas'+ id, {headers: this.getToken()});
  }
}