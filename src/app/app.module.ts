import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {WebcamModule} from 'ngx-webcam';
import { AngularFireModule } from '@angular/fire';
import {environment} from '../environments/environment'; 
import { AppRoutingModule } from './app-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { AlreadyComponent } from './components/already/already.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { Register2Component } from './components/register2/register2.component';
import { Register3Component } from './components/register3/register3.component';
import { ProfileComponent } from './components/profile/profile.component';
import { RegisterSuccessComponent } from './components/register-success/register-success.component';
import { InternInfoComponent } from './components/intern-info/intern-info.component';
import { InternInfo2Component } from './components/intern-info2/intern-info2.component';
import { RegisterDoneComponent } from './components/register-done/register-done.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/header/header.component';
import { UserListComponent } from './components/user-list/user-list.component';
import { UploadFormComponent } from './components/upload-form/upload-form.component';
import { ResultsComponent } from './components/results/results.component';
import { CardResultsComponent } from './components/card-results/card-results.component';
import { ProgressComponent } from './components/progress/progress.component';




@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    AlreadyComponent,
    RegisterComponent,
    LoginComponent,
    Register2Component,
    Register3Component,
    ProfileComponent,
    RegisterSuccessComponent,
    InternInfoComponent,
    InternInfo2Component,
    RegisterDoneComponent,
    HeaderComponent,
    UserListComponent,
    UploadFormComponent,
    ResultsComponent,
    CardResultsComponent,
    ProgressComponent
      
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    WebcamModule,
    BrowserAnimationsModule,
    NgbModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
