import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { viewComponent } from './view/view.component';
import { BetsComponent } from './bets/bets.component';

const routes: Routes = [
  { path: '', component: viewComponent },
  { path: 'bets', component: BetsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
