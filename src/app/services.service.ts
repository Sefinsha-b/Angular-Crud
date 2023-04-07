import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  constructor(private http: HttpClient) { }
url:string='http://localhost:3000';

PostApi(data:any){
  return this.http.post(this.url + '/Appointment', data);
}
GetApi( ){
  return this.http.get(this.url+'/Appointment');
}

GetPutapi(id:any){
return this.http.get(`${this.url + '/Appointment'}/${id}`);
}
PutApi(id:any ,data:any){
return this.http.put(`${this.url + '/Appointment'}/${id}`,data);
}


}
