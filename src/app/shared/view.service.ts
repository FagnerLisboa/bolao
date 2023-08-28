import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class viewService {

  // private readonly urlApiFutebol = environment['apiFutebol'];
  // private readonly urlToken = environment['apiToken'];

  apiFutebol = 'https://api.api-futebol.com.br/v1/campeonatos/10/rodadas'
  apiToken = ''

  readonly urlApiFutebol!: string;
  
  constructor(private httpClient: HttpClient) { 
    this.urlApiFutebol == 'https://api.api-futebol.com.br/v1/campeonatos/10/rodadas'

    var headers = {
      Headers: new HttpHeaders()
    }

  }
  getAll() {
    return this.httpClient.get<object>(this.apiFutebol,
      {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
          // "Authorization": `Bearer ${test_f7f3755a81c59d9c8ad5796b4034ac}`

        })
    })
  }



  // getAll() {
  //   return this.httpClient.get<any[]>(`${this.rodadasUrl}`);

  // }

  // getOne() {

  // }

  
}