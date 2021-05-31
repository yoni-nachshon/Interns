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
  
  user:User;

  constructor(private service:RegisterService,private router:Router) {
    this.user = this.service.user; 
   
  }

  ngOnInit(): void {
  }
  add(){
    this.service.user = this.user;
    this.router.navigate(['/intern-info2'])
  }

}
