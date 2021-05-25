import { Component, OnInit } from '@angular/core';
import { RegisterService } from 'src/app/services/register.service';

@Component({
  selector: 'app-register-done',
  templateUrl: './register-done.component.html',
  styleUrls: ['./register-done.component.scss']
})
export class RegisterDoneComponent implements OnInit {
  name;
  img;

  constructor(private service:RegisterService) {
    this.name = this.service.user.name;
    this.img = this.service.user.img;
   }

  ngOnInit(): void {
  }

}
