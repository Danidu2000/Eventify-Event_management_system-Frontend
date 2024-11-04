import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LoginFormComponent } from './loginPage/login-form/login-form.component';
import { SignupFormComponent } from './signupPage/signup-form/signup-form.component';
import { NavBarComponent } from "./commenPage/nav-bar/nav-bar.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, LoginFormComponent, SignupFormComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Eventify-Event_management_system-Frontend';
}
