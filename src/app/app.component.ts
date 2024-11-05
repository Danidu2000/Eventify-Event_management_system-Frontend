import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { LoginFormComponent } from './loginPage/login-form/login-form.component';
import { SignupFormComponent } from './signupPage/signup-form/signup-form.component';
import { NavBarComponent } from "./commenPage/nav-bar/nav-bar.component";
import { FooterComponent } from "./commenPage/footer/footer.component";
import { EventComponentComponent } from "./eventPage/event-component/event-component.component";
import { EventFormComponent } from "./eventPage/event-form/event-form.component";
import { EventInputComponent } from "./eventPage/event-input/event-input/event-input.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, LoginFormComponent, SignupFormComponent, NavBarComponent, FooterComponent, EventComponentComponent, EventFormComponent, EventInputComponent],
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
