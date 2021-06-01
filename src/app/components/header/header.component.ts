import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/userModel';
import { RegisterService } from 'src/app/services/register.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  user:User;

  constructor(private service:RegisterService) {
    this.user = this.service.user; 
   
   }

  ngOnInit(): void {
  }

}
