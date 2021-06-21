import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss']
})
export class ResultsComponent implements OnInit {

  tests = [
    {title: "test1",score: 90, date:10/1/2018},
    {title: "test2",score: 85, date:15/3/2017},
    {title: "test3",score: 75, date:20/7/2017},
    {title: "test4",score: 80, date:7/12/2017},  
    {title: "test5",score: 65, date:7/1/2017}  
  ];
  practises = [
    {title: "practise1",score: 70, date:4/1/2018},
    {title: "practise2",score: 80, date:5/4/2017},
    {title: "practise3",score: 75, date:13/8/2017},
    {title: "practise4",score: 65, date:25/11/2017},
    {title: "practise5",score: 90, date:4/1/2017}
  ];

  lastTest = this.tests[0];
  lastPractice = this.practises[0];

  constructor() { }

  ngOnInit(): void {
  }

}
