import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { User } from '../models/userModel';



@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  baseURL = 'http://localhost:5000/';
  name;
  

  constructor(private http:HttpClient) { }

  registerUser(name:string,id:string,passport:string,phone:string):Observable<any> {
    return this.http.post(this.baseURL + "api/users/create",{id:id,name:name,passport:passport,phone:phone})

  }
}
