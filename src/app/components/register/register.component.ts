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

  user : User;
 
  constructor(private service:RegisterService) {
    this.user = this.service.user;
   }
  
  ngOnInit(): void {
    console.log(this.service.code.toString());
    
  }
  register(): void {

    this.service.user = this.user;
    
    this.service.sendSms().subscribe(()=>{}); 

    // this.service.registerUser(this.user).subscribe((data:User)=>{
    //   console.log(data),this.service.user.id = data.id;  
    // })
    
  }
  

}
