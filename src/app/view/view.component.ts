import { Component } from '@angular/core';

import { ViewService } from '../shared/view.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss']
})
export class viewComponent {

  constructor(private ViewService: ViewService) { }

  getAllScore() {
    this.ViewService.getAll()
    // .then(view => console.log((view))
    // .catch()
    // )
  }

}
