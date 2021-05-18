import { Component, OnInit } from '@angular/core';
import { RegisterService } from 'src/app/services/register.service';

@Component({
  selector: 'app-register3',
  templateUrl: './register3.component.html',
  styleUrls: ['./register3.component.scss']
})
export class Register3Component implements OnInit {
  name;

  constructor(private service:RegisterService) {
    this.name = this.service.name;
  }
  
  ngOnInit(): void {
  }
  

}
