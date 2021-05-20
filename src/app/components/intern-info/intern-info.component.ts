import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-intern-info',
  templateUrl: './intern-info.component.html',
  styleUrls: ['./intern-info.component.scss']
})
export class InternInfoComponent implements OnInit {
  age;
  country;
  city;
  year;
  academic;

  constructor() { }

  ngOnInit(): void {
  }

}
