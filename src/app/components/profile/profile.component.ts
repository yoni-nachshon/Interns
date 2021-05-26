import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  formatLabel(value: number) {
    if (value > 5) {
      return Math.round(value / 5);
    }

    return value;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
