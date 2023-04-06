import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ServicesService } from 'src/app/services.service';

@Component({
  selector: 'app-add-appointment',
  templateUrl: './add-appointment.component.html',
  styleUrls: ['./add-appointment.component.css']
})
export class AddAppointmentComponent implements OnInit {

  addForm = new FormGroup({
    Email: new FormControl(""),
    Password: new FormControl(""),
    Passport: new FormControl("")
  })

  AppForm: any;
  AppData: any;
  ngOnInit(): void {
    this.GetData();

  }

  constructor(private ConsAdd: ServicesService) { }
  get add() {
    return this.addForm.controls;
  }

  Submit() {
    return this.ConsAdd.PostApi(this.addForm.value).subscribe((resp: any) => {
      this.AppForm = resp;
      console.log(resp);
    })
  }

  GetData() {
    return this.ConsAdd.GetApi().subscribe((resp: any) => {
      this.AppData = resp;
    }

    )
  }
}
