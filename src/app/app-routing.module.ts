import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InternInfoComponent } from './components/intern-info/intern-info.component';
import { InternInfo2Component } from './components/intern-info2/intern-info2.component';
import { ListComponent } from './components/list/list.component';
import { LoginComponent } from './components/login/login.component';
import { ProfileComponent } from './components/profile/profile.component';
import { RegisterDoneComponent } from './components/register-done/register-done.component';
import { RegisterSuccessComponent } from './components/register-success/register-success.component';
import { RegisterComponent } from './components/register/register.component';
import { Register2Component } from './components/register2/register2.component';
import { Register3Component } from './components/register3/register3.component';
import { WelcomeComponent } from './components/welcome/welcome.component';

const routes: Routes = [
  {path:'', component: WelcomeComponent},
  {path:'list', component: ListComponent},
  {path:'login', component: LoginComponent},
  {path:'profile', component: ProfileComponent},
  {path:'register', component: RegisterComponent},
  {path:'register2', component: Register2Component},
  {path:'register3', component: Register3Component},
  {path:'register-success', component: RegisterSuccessComponent},
  {path:'intern-info', component: InternInfoComponent},
  {path:'intern-info2', component: InternInfo2Component},
  {path:'register-done', component: RegisterDoneComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
