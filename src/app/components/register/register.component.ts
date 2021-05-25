import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { User } from 'src/app/models/userModel';
import { RegisterService } from 'src/app/services/register.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  name;
  id;
  passport;
  phone;      
  constructor(private registerService:RegisterService) { }
  
  ngOnInit(): void {
    console.log(this.registerService.code.toString());
    
  }
  register(): void {
    this.registerService.name = this.name;
    this.registerService.phone = this.phone;

    this.registerService.sendSms().subscribe(()=>{}); 

    this.registerService.registerUser(this.name,this.id,this.passport,this.phone).subscribe((data:User)=>{
      console.log(data),this.registerService.user = data.id;
      
    })
    
  }
  

}
