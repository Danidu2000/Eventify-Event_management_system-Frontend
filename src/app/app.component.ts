import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { LoginFormComponent } from './loginPage/login-form/login-form.component';
import { SignupFormComponent } from './signupPage/signup-form/signup-form.component';
import { NavBarComponent } from "./commenPage/nav-bar/nav-bar.component";
import { FooterComponent } from "./commenPage/footer/footer.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, LoginFormComponent, SignupFormComponent, NavBarComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Eventify-Event_management_system-Frontend';

  constructor(private router: Router) {}

  navigateTo(path: string) {
    this.router.navigate([path]);
  }
}
