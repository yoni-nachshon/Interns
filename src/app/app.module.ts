import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {WebcamModule} from 'ngx-webcam';
import { MatSliderModule } from '@angular/material/slider';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
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
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    HttpClientModule,
    WebcamModule,
    BrowserAnimationsModule,
    MatSliderModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
