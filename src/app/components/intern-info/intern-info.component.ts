import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/userModel';
import { RegisterService } from 'src/app/services/register.service';

@Component({
  selector: 'app-intern-info',
  templateUrl: './intern-info.component.html',
  styleUrls: ['./intern-info.component.scss']
})
export class InternInfoComponent implements OnInit {
  name;
  img;

  user:User;

  constructor(private service:RegisterService) { 
    this.name = this.service.user.name;
    this.img = this.service.user.img;
  }

  ngOnInit(): void {
  }
  add(){
    this.service.user = this.user;
  }

}
