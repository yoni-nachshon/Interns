import { Component, OnInit } from '@angular/core';
import { WebcamImage } from 'ngx-webcam';
import { Observable, Subject } from 'rxjs';
import { User } from 'src/app/models/userModel';
import { RegisterService } from 'src/app/services/register.service';

@Component({
  selector: 'app-register3',
  templateUrl: './register3.component.html',
  styleUrls: ['./register3.component.scss']
})
export class Register3Component implements OnInit {
  name;
  
  constructor(private service:RegisterService) {
    this.name = this.service.user.name;
    
  }
  
  ngOnInit(): void {
  }
     // latest snapshot
     public webcamImage: WebcamImage = null;
     // webcam snapshot trigger
     private trigger: Subject<void> = new Subject<void>();
     triggerSnapshot(): void {
      this.trigger.next();
     }
     handleImage(webcamImage: WebcamImage): void {
      console.info('received webcam image', webcamImage);
      this.webcamImage = webcamImage;
      this.service.user.img = webcamImage;
     }
    
     public get triggerObservable(): Observable<void> {
      return this.trigger.asObservable();
     }

}
