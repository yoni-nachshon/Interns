import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable, of } from 'rxjs';
import { User } from '../models/userModel';
import { WebcamImage } from 'ngx-webcam';
import { code } from './code.class';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  baseURL = 'http://localhost:5000/';
  password = 1234;
  code = new code();

  user : User = {
    name: "",
    id : "",
    passport: "",
    phone: null,
    password:null,
    img: null,
    age: null,
    country: "",
    city: "",
    academicInstitution: "",
    graduationYear: null,
    medicalInstitution: "",
    residancy: "",
    department: "",
    residancyYear: null 
  }



  constructor(private http: HttpClient) {


  
   }

  registerUser(): Observable<Object> {
    return this.http.post(this.baseURL + "api/users/create",this.user)
  }
  updateUser(): Observable<Object> {
    return this.http.put(this.baseURL + "api/users/update", this.user)
  }
  sendSms(isExists?: boolean): Observable<Object> {
   
    return this.http.post(this.baseURL + "api/users/sendSms",
      { from: 'Intern App', to: this.user.phone, text: `Hello ${this.user.name}`, loginMode: isExists, name: this.user.name, phone: this.user.phone }
    );
  }
  sendCode(code: string):Observable<any>{
    return this.http.post<any>(this.baseURL+'api/users/iscodecomper',{code:code, phone: this.user.phone});
  }

  


}
