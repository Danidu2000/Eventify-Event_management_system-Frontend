import { Component } from '@angular/core';
import { EventComponentComponent } from "../event-component/event-component.component";
import { Router } from '@angular/router';

@Component({
  selector: 'app-event-form',
  standalone: true,
  imports: [EventComponentComponent],
  templateUrl: './event-form.component.html',
  styleUrl: './event-form.component.css'
})
export class EventFormComponent {

  constructor(private router: Router) { }
  navigateTo(path: string) {
    this.router.navigate([path]);
  }
}
