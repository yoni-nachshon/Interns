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
  name;
  

  constructor(private service:RegisterService,private router:Router) {
    this.name = this.service.user.name;
    
  }
  
  ngOnInit(): void {
            
  }
  register(): void {
    
    if(this.code.toString() == this.service.code.toString()){
      this.router.navigate(["/register3"]); 
    }
    else{
      this.wrong = true;
    }
  }
  resend(){
    this.service.sendSms().subscribe(()=>{});
  }

}
