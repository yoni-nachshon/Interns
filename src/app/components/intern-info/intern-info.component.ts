import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/userModel';
import { RegisterService } from 'src/app/services/register.service';

@Component({
  selector: 'app-intern-info',
  templateUrl: './intern-info.component.html',
  styleUrls: ['./intern-info.component.scss']
})
export class InternInfoComponent implements OnInit {
  // name;
  // img;

  user:User;

  constructor(private service:RegisterService,private router:Router) {
    this.user = this.service.user; 
    // this.name = this.service.user.name;
    // this.img = this.service.user.img;
  }

  ngOnInit(): void {
  }
  add(){
    this.service.user = this.user;
    this.router.navigate(['/intern-info2'])
  }

}
