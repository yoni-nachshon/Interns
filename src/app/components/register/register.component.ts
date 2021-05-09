import { Component, OnInit } from '@angular/core';
import { RegisterService } from 'src/app/register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  ID;
  name;
  Passport;
  Phone;
  
 

  constructor(private registerService:RegisterService) { }

  ngOnInit(): void {
  }
  add(): void {
    this.registerService.ID = this.ID;
    this.registerService.Name = this.name;
    this.registerService.Passport = this.Passport;
    this.registerService.Phone = this.Phone;
    
  }
  

}
