import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/userModel';
import { RegisterService } from 'src/app/services/register.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  name;
  phone;
  wrong = false;

  constructor(private service:RegisterService,private router:Router) {
   }

  ngOnInit(): void {
  }
  login(){
    this.service.user.phone = this.phone;
    this.service.user.name = this.name;
    this.service.sendSms(true).subscribe(()=>{
      this.router.navigate(["/register2"]);
    });
    // if(this.name == this.service.user.name && this.phone == this.service.user.phone){
      
    //   this.router.navigate(["/register2"]);
    // }
    // else {
    //   this.wrong = true;
    // }
  }

}
