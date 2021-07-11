import { Component, OnInit } from '@angular/core';
import { RegisterService } from 'src/app/services/register.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {

  person = '';
  text = '';

  constructor(private service:RegisterService) { }

  ngOnInit(): void {
  }
  intern(): void {
    this.person = "Welcome Intern!";
    this.text = "Don't have an account?";
    this.service.user.roleNumber = 10;
    
  }
  supervisor(): void {
    this.person = "Welcome Supervisor!";
    this.text = "If you have an account";
    this.service.user.roleNumber = 20;
  }  

}