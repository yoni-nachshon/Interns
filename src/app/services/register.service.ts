import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable, of } from 'rxjs';
import { tap } from 'rxjs/operators';
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
    img: null,
    age: null,
    country: "",
    city: "",
    academicInstitution: "",
    graduationYear: null,
    medicalInstitution: "",
    residancy: "",
    department: "",
    residancyYear: null,
    roleNumber:10 
  }



  constructor(private http: HttpClient) {  
   }

  registerUser(): Observable<User> {
    return this.http.post<User>(this.baseURL + "api/users/create",this.user)
    .pipe(tap(res=>{localStorage.setItem('token',JSON.stringify(res.token))}))
  }
  updateUser(): Observable<Object> {
    return this.http.put(this.baseURL + "api/users/update", this.user)
  }
  getWithToken<T>(path: String, headers?: object): Observable<T> {
    return this.http.get<T>(this.baseURL + path, this.getOptions(headers))
    
    
  }
  getOptions(headers?: any) {
    headers = headers? headers : {};
    headers['content-type'] = 'application/json';
    headers['x-access-token'] = JSON.parse(localStorage.getItem('token'));
    return {
      headers: new HttpHeaders(headers)
    }
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
