import { Component, OnInit } from '@angular/core';
import { iRound } from '../shared/Shared';
import { SharedService } from '../shared/Shared.service';

@Component({
  selector: 'app-widget',
  templateUrl: './widget.component.html',
  styleUrls: ['./widget.component.scss']
})
export class WidgetComponent implements OnInit {
  
  iRound: iRound[] = [];
  constructor(private sharedService: SharedService) {
  }
  
  ngOnInit() {
    this.getRounds();
  }

  getRounds() {
    return this.sharedService.getAll().subscribe((data: any) => {
     this.iRound = data['iRound'];
     console.log(data);     
    })
  }
  getId() {
    this.sharedService.getById(0)
    
  }
}