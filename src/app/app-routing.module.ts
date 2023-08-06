import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VisualizationComponent } from './visualization/visualization.component';

const routes: Routes = [
  { path: '', component: VisualizationComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
