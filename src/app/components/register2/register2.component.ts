import { Component, OnInit } from '@angular/core';
import { RegisterService } from 'src/app/services/register.service';

@Component({
  selector: 'app-register2',
  templateUrl: './register2.component.html',
  styleUrls: ['./register2.component.scss']
})
export class Register2Component implements OnInit {
  name;
  phone;
  

  constructor(private registerService:RegisterService) {
    this.name = this.registerService.name
    this.phone = this.registerService.name
     
   }

  ngOnInit(): void {
         
  }

}
