import { Component, OnInit } from '@angular/core';
import { RegisterService } from 'src/app/register.service';

@Component({
  selector: 'app-register2',
  templateUrl: './register2.component.html',
  styleUrls: ['./register2.component.scss']
})
export class Register2Component implements OnInit {
  name : any;
  phone : any;
  

  constructor(private registerService:RegisterService) {
    this.name = this.registerService.Name;
    this.phone = this.registerService.Phone;
     
   }

  ngOnInit(): void {
         
  }

}
