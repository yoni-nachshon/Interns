import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';





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
import { IconComponent } from './components/icon/icon.component';
import { RegisterSuccessComponent } from './components/register-success/register-success.component';
import { InternInfoComponent } from './components/intern-info/intern-info.component';
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
    IconComponent,
    RegisterSuccessComponent,
    InternInfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    HttpClientModule
  
   
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
