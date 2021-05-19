import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RegisterService } from 'src/app/services/register.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  name;
  password;
  wrong = false;

  constructor(private service:RegisterService,private router:Router) {
    this.name = this.service.name
   }

  ngOnInit(): void {
  }
  login(){
    if(this.password != this.service.password ){
      this.wrong = true;
    }
    else{
      this.password = this.service.password;
      this.router.navigate(["/profile"]);
    }
  }

}
