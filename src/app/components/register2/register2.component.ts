import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RegisterService } from 'src/app/services/register.service';

@Component({
  selector: 'app-register2',
  templateUrl: './register2.component.html',
  styleUrls: ['./register2.component.scss']
})
export class Register2Component implements OnInit {
  name;
  phone;
  code = 1234;
  codeIn = {one:null,two:null,three:null,four:null};
  wrong = false;
  

  constructor(private registerService:RegisterService,private router:Router) {
    
  }
  
  ngOnInit(): void {
    this.name = this.registerService.name
    this.phone = this.registerService.phone       
  }
  register(): void {
    if(this.codeIn.one + this.codeIn.two + this.codeIn.three + this.codeIn.four == this.code){
      this.router.navigate(["/register3"]); 
    }
    else{
      this.wrong = true;
    }
  }

}
