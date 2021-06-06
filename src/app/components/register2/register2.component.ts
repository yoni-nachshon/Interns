import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/userModel';
import { code } from 'src/app/services/code.class';
import { RegisterService } from 'src/app/services/register.service';

@Component({
  selector: 'app-register2',
  templateUrl: './register2.component.html',
  styleUrls: ['./register2.component.scss']
})
export class Register2Component implements OnInit {

  code = new code();
  wrong = false;
  user:User


  constructor(private service: RegisterService, private router: Router) {
    this.user = this.service.user;

  }

  ngOnInit(): void {

  }
  register(): void {   
    this.service.sendCode(this.code.toString()).subscribe(
      res => {
        // if intern is login go to profile
        if(res && res.user) {
          this.user = res.user;
          //this.user.token = res.token;
          localStorage.setItem('token',JSON.stringify(res.token));
          //console.log(this.user.token);
          if(this.user.roleNumber > 10) {
            this.router.navigate(["/list"]);            
          }
          else {
            this.router.navigate(["/profile"]);
          }                             
        }
        else{         
            this.router.navigate(["/register3"])
          }         
                   
      },
      err => this.wrong = true
    );
  }
  resend(): void {this.service.sendSms().subscribe(()=>{});}

  onDigitInput(event){

    let element;
    if(event.code !== 'Backspace'){
      element = event.srcElement.nextElementSibling;
    }
    if(event.code == 'Backspace'){
      element = event.srcElement.previousElementSibling;
    }
    if(element == null){
      return;
    }
    else{
      element.focus();
    }
        
    
  }


}
