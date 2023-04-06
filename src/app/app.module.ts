import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddAppointmentComponent } from './AddAppointment/add-appointment/add-appointment.component';
import { EditAppointmentComponent } from './EditAppointment/edit-appointment/edit-appointment.component';
import { ViewAppointmentComponent } from './ViewAppointment/view-appointment/view-appointment.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    AppComponent,
    AddAppointmentComponent,
    EditAppointmentComponent,
    ViewAppointmentComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  
    HttpClientModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
