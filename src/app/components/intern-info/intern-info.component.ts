import { Component, OnInit } from '@angular/core';
import { RegisterService } from 'src/app/services/register.service';

@Component({
  selector: 'app-intern-info',
  templateUrl: './intern-info.component.html',
  styleUrls: ['./intern-info.component.scss']
})
export class InternInfoComponent implements OnInit {
  name;
  img;

  age;
  country;
  city;
  year;
  academic;

  constructor(private service:RegisterService) { 
    this.name = this.service.name;
    this.img = this.service.img;
  }

  ngOnInit(): void {
  }
  add(){
    this.service.updateUser(this.age,this.country,this.city,this.year,this.academic).subscribe(info =>{
      console.log(info);
      
    })
  }

}
