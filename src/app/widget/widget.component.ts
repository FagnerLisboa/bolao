import { Component, OnInit } from '@angular/core';
import { viewService } from '../shared/view.service';
import { Rounds } from '../models/round.model';
import { Observable, Subscriber } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-widget',
  templateUrl: './widget.component.html',
  styleUrls: ['./widget.component.scss']
})
export class WidgetComponent implements OnInit {
  rounds: Rounds[] = [];

  constructor(private http: HttpClient) {
  }

  ngOnInit() {
    let api_key = "live_0bd288f2327608058ac03f20325ad5";
    const headers = new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${api_key}`
      });

    const requestOptions = { headers: headers };

    this.http.get('https://api.api-futebol.com.br/v1/campeonatos/10', requestOptions)
        .subscribe((res: any) => {
            console.log(res);
        });
  }

  getAll() { 
    
  }
}


