import { Component, OnInit } from '@angular/core';
import { ServicesService } from 'src/app/services.service';

@Component({
  selector: 'app-view-appointment',
  templateUrl: './view-appointment.component.html',
  styleUrls: ['./view-appointment.component.css']
})
export class ViewAppointmentComponent implements OnInit{
View: any;
constructor(private ConsView:ServicesService){}
  ngOnInit(): void {
this.GetViewPage();
  }

GetViewPage(){
   this.ConsView.GetApi().subscribe((resp)=>{
    this.View=resp;
  })
}

}
