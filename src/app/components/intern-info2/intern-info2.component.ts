import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/userModel';
import { RegisterService } from 'src/app/services/register.service';

@Component({
  selector: 'app-intern-info2',
  templateUrl: './intern-info2.component.html',
  styleUrls: ['./intern-info2.component.scss']
})
export class InternInfo2Component implements OnInit { 
  
  user:User;
  numbers = [1,2,3,4,5]

  constructor(private service:RegisterService,private router:Router) {
    this.user = this.service.user;
   }

  ngOnInit(): void {
  }
  done():void{
    this.service.registerUser().subscribe(data =>{
      console.log(data);  
    })
  }
  
 
  
}
  


