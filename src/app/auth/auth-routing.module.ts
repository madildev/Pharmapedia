import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginInComponent } from './login-in/login-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';

const routes: Routes = [
  {path:'auth', children:[
    {path: 'login', component: LoginInComponent},
    {path: 'signup', component: SignUpComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
