import { Injectable } from '@angular/core';
import { IView, view } from '../iview';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ViewService {
  view: IView[] = view;

  constructor(private httpClient: HttpClient) { }

  getAll() {
    return this.view;
  }

  getOne(viewId: number) {
    return this.view.find(view => view.id === viewId);
  }
}
 
