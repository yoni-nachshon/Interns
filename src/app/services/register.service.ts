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
  name;
  password = 1234;
  phone;
  img;
  user;
  code = new code();



  constructor(private http: HttpClient) {
    this.code.start();
   }

  registerUser(name: string, id: string, passport: string, phone: string): Observable<any> {
    return this.http.post(this.baseURL + "api/users/create", { id: id, name: name, passport: passport, phone: phone })
  }
  updateUser(age: number, country: string, city: string, year: number, academic: string): Observable<any> {
    return this.http.put(this.baseURL + "api/users/" + this.user, { age: age, country: country, year: year, academic: academic })
  }
  sendSms(): Observable<Object> {
    return this.http.post(this.baseURL + "api/users/sendSms",
      { from: 'Intern Academy', to: this.phone, text: `Hello ${this.name}, your code is: ${this.code.toString()}` }
    );
  }

  


}
