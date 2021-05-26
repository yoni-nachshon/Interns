import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/userModel';
import { RegisterService } from 'src/app/services/register.service';

@Component({
  selector: 'app-intern-info2',
  templateUrl: './intern-info2.component.html',
  styleUrls: ['./intern-info2.component.scss']
})
export class InternInfo2Component implements OnInit { 
   
  name;
  img;

  err = false;

  user:User;

  constructor(private service:RegisterService,private router:Router) {
    this.name = this.service.user.name;
    this.img = this.service.user.img;
   }

  ngOnInit(): void {
  }
  done(){
    this.service.user.practices = [
      {title: 'Practice1', date: null, score: null },
      {title: 'Practice2', date: null, score: null },
      {title: 'Practice3', date: null, score: null },
      {title: 'Practice4', date: null, score: null },
      {title: 'Practice5', date: null, score: null },
    ];
    this.service.user.tests = [
      {title: 'Test1', date: null, score: null },
      {title: 'Test2', date: null, score: null },
      {title: 'Test3', date: null, score: null },
      {title: 'Test4', date: null, score: null },
      {title: 'Test5', date: null, score: null },
    ];
    this.service.registerUser().subscribe(data =>{
      if(data){
        this.router.navigate(['/register-done'])
      }
    },
    error =>{
     this.err = true;
    })
  }
 
  
}
  


