import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ServicesService } from 'src/app/services.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-edit-appointment',
  templateUrl: './edit-appointment.component.html',
  styleUrls: ['./edit-appointment.component.css']
})
export class EditAppointmentComponent implements OnInit {

  EditForm = new FormGroup({
    Name: new FormControl(""),
    Password: new FormControl(""),
    Passport: new FormControl("")


  })
  AppForm: any;
  AppData: any;
  EditAppointments: any;
  
 

  ngOnInit(): void {

this.FetchingObj();

  }
  constructor(private ConsEdit: ServicesService,private  router:ActivatedRoute) { }
  get add() {
    return this.EditForm.controls;
  }


  FetchingObj() {
    return this.ConsEdit.GetPutapi(this.router.snapshot.params['id']).subscribe((resp: any) => {
      this.EditForm = new FormGroup({
        Name: new FormControl(resp['Name']),
        Password: new FormControl(resp['Password']),
        Passport: new FormControl(resp['Passport'])


      })
    })
  }

  Update() {
    return this.ConsEdit.PutApi(this.router.snapshot.params['id'], this.EditForm.value).subscribe((resp: any) => {
      console.log(resp);
      alert("update successfully..!");
      window.location.reload();
    })
  }
}

  





