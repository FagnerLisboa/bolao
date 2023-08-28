import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { viewComponent } from './view/view.component';
import { BetsComponent } from './bets/bets.component';
import { WidgetComponent } from './widget/widget.component';

const routes: Routes = [
  { path: '', component: viewComponent },
  { path: 'bets', component: BetsComponent},
  { path: 'widget', component: WidgetComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
