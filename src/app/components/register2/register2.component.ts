import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/userModel';
import { code } from 'src/app/services/code.class';
import { RegisterService } from 'src/app/services/register.service';

@Component({
  selector: 'app-register2',
  templateUrl: './register2.component.html',
  styleUrls: ['./register2.component.scss']
})
export class Register2Component implements OnInit {

  code = new code();
  wrong = false;
  name : string;


  constructor(private service: RegisterService, private router: Router) {
    this.name = this.service.user.name;

  }

  ngOnInit(): void {

  }
  register(): void {
    

    this.service.sendCode(this.code.toString()).subscribe(
      res => this.router.navigate(["/register3"]),
      err => this.wrong = true
    );
  }


}
