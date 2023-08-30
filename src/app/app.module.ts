import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastModule } from 'primeng/toast';
import { ButtonModule } from 'primeng/button';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { viewComponent } from './view/view.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { BetsComponent } from './bets/bets.component';
import { FooterComponent } from './footer/footer.component';
import { viewService } from './shared/view.service';
import { WidgetComponent } from './widget/widget.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    viewComponent,
    BetsComponent,
    FooterComponent,
    WidgetComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    ToastModule,
    ButtonModule
  ],
  providers: [HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
