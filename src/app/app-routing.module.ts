import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ViewAppointmentComponent } from './ViewAppointment/view-appointment/view-appointment.component';
import { EditAppointmentComponent } from './EditAppointment/edit-appointment/edit-appointment.component';
import { AddAppointmentComponent } from './AddAppointment/add-appointment/add-appointment.component';

const routes: Routes = [
  {path: '', redirectTo:"viewForLoan",pathMatch:'full'},
  {path:'AddForm',component:AddAppointmentComponent},
  {path:'View',component:ViewAppointmentComponent},
  {path:'Edit/:id',component:EditAppointmentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
