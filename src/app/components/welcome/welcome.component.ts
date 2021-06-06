import { Component, OnInit } from '@angular/core';
import { RegisterService } from 'src/app/services/register.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {

  person = "Intern" ;

  constructor(private service:RegisterService) { }

  ngOnInit(): void {
  }
  intern(): void {
    this.person = "Intern";
    this.service.user.roleNumber = 10;
    
  }
  supervisor(): void {
    this.person = "Supervisor";
    this.service.user.roleNumber = 20;
  }

}