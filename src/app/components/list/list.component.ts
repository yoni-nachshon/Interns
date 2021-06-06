import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/userModel';
import { RegisterService } from 'src/app/services/register.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  users: User [] = [];

  constructor(private service:RegisterService) { 
    service.getWithToken<User[]>('api/users/getAll').subscribe(data => {
      this.users = data;
    })
  }

  ngOnInit(): void {
  }

}
