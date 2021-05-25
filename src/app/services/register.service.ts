import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
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
    id : "",
    name: "",
    passport: "",
    phone: null,
    img: null,
    age: null,
    country: "",
    city: "",
    graduationYear: null,
    academicInstitution: "",
    medicalInstitution: "",
    residancy: "",
    department: "",
    residancyYear: null,
    practices : [],
    tests : [],
  }



  constructor(private http: HttpClient) {
    console.log(this.user);
    
    
    
    this.code.start();
   }

  registerUser(): Observable<Object> {
    return this.http.post(this.baseURL + "api/users/create",this.user)
  }
  updateUser(): Observable<Object> {
    return this.http.put(this.baseURL + "api/users/update", this.user)
  }
  sendSms(): Observable<Object> {
    return this.http.post(this.baseURL + "api/users/sendSms",
      { from: 'Intern Academy', to: this.user.phone, text: `Hello ${this.user.name}, your code is: ${this.code.toString()}` }
    );
  }

  


}
