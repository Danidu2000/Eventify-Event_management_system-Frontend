import { RouterModule, Routes } from '@angular/router';
import { SignupFormComponent } from './signupPage/signup-form/signup-form.component';
import { LoginFormComponent } from './loginPage/login-form/login-form.component';
import { NgModule } from '@angular/core';
import { HomeComponent } from './commenPage/home/home.component';

export const routes: Routes = [
    {path:"",redirectTo:"home",pathMatch:"full"},
    {path:"signup", component: SignupFormComponent},
    {path:"login",component: LoginFormComponent},
    {path:"home",component: HomeComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule {}
