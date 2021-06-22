import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss']
})
export class ResultsComponent implements OnInit {

  results = [
    {title: "test-1",score: 90, date:10/1/2018},
    {title: "practise-1",score: 70, date:4/1/2018},
    {title: "practise-2",score: 80, date:5/4/2017},
    {title: "practise-3",score: 75, date:13/8/2017},
    {title: "test-2",score: 85, date:15/3/2017},
    {title: "practise-4",score: 65, date:25/11/2017},
    {title: "practise-5",score: 76, date:4/1/2017},
    {title: "practise-6",score: 85, date:4/1/2017},  
    {title: "test-3",score: 95, date:15/3/2017},
    {title: "practise-7",score: 75, date:4/1/2017},  
    {title: "practise-8",score: 70, date:4/1/2017},  
    {title: "practise-9",score: 60, date:4/1/2017},  
  ];
  

  lastTest = this.results[0];
  lastPractice = this.results[1];

  constructor() { }

  ngOnInit(): void {
  }

}
