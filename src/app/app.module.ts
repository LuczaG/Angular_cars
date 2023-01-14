import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here

import { AppComponent } from './app.component';
import { CarsComponent } from './_components/cars/cars.component';
import { CarDetailComponent } from './_components/car-detail/car-detail.component';
import { MessagesComponent } from './_components/messages/messages.component';
import { AppRoutingModule } from './app-routing.module';
import { DashboardComponent } from './_components/dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    CarsComponent,
    CarDetailComponent,
    MessagesComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
