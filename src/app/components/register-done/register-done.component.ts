import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/userModel';
import { RegisterService } from 'src/app/services/register.service';

@Component({
  selector: 'app-register-done',
  templateUrl: './register-done.component.html',
  styleUrls: ['./register-done.component.scss']
})
export class RegisterDoneComponent implements OnInit {
 
  user:User;

  constructor(private service:RegisterService) {
    this.user = this.service.user;
    
   }

  ngOnInit(): void {
  }

}
