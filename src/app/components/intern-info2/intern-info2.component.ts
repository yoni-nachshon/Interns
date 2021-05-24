import { Component, OnInit } from '@angular/core';
import { RegisterService } from 'src/app/services/register.service';

@Component({
  selector: 'app-intern-info2',
  templateUrl: './intern-info2.component.html',
  styleUrls: ['./intern-info2.component.scss']
})
export class InternInfo2Component implements OnInit {
  name;
  img;

  medical;
  residency;
  department;
  yearInRes;

  constructor(private service:RegisterService) {
    this.name = this.service.name;
    this.img = this.service.img;
   }

  ngOnInit(): void {
  }

}
