import { Component, OnInit } from '@angular/core';
import { RegisterService } from 'src/app/services/register.service';

@Component({
  selector: 'app-register-success',
  templateUrl: './register-success.component.html',
  styleUrls: ['./register-success.component.scss']
})
export class RegisterSuccessComponent implements OnInit {
  name;
  img;

  constructor(private service:RegisterService) {
    this.name = this.service.name;
    this.img = this.service.img;
   }

  ngOnInit(): void {
  }

}
