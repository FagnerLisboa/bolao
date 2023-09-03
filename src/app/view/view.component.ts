import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { Rounds } from '../models/round.model';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss']
})
export class viewComponent implements OnInit {

  constructor(private http: HttpClient) {
  }

  ngOnInit() {
  //  
  // ---------------------------------------------

  // getRounds(): Observable<Rounds> {
  //   this.http.get(this.rounds).subscribe
  //        map((res: any[]) => {
  //            // return res.json();
  //    })
  //  }
 }
}



