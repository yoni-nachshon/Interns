import { Component, OnInit } from '@angular/core';
import { RegisterService } from 'src/app/services/register.service';

@Component({
  selector: 'app-register-success',
  templateUrl: './register-success.component.html',
  styleUrls: ['./register-success.component.scss']
})
export class RegisterSuccessComponent implements OnInit {
  img;
  name;
  

  constructor(private service:RegisterService) {
    this.img = service.user.img;
    this.name = service.user.name;
    
   }

  ngOnInit(): void {
  }

}
