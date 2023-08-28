import { Component, OnInit } from '@angular/core';
import { viewService } from '../shared/view.service';

@Component({
  selector: 'app-widget',
  templateUrl: './widget.component.html',
  styleUrls: ['./widget.component.scss']
})
export class WidgetComponent implements OnInit {

  widget!: Array<any>;
  apiFutebol: any
  Service: object | undefined;


  constructor(private viewService: viewService) {}

  ngOnInit(): void { 
    this.getAll();
  }

  getAll(): void {
    this.viewService.getAll().subscribe(data => this.Service = data)
  }

}
