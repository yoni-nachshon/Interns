import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {
  man;

  constructor() { }

  ngOnInit(): void {
  }
  intern(): void {
    this.man = "Intern";
  }
  supervisor(): void {
    this.man = "Supervisor";
  }

}