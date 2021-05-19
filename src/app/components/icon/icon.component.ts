import { Component, OnInit } from '@angular/core';
import { RegisterService } from 'src/app/services/register.service';

@Component({
  selector: 'app-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss']
})
export class IconComponent implements OnInit {
  name;

  constructor(private service:RegisterService) {
    this.name = this.service.name;
   }

  ngOnInit(): void {
  }

}
