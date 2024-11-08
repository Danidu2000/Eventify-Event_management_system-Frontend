import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { EventService } from '../../services/event.service';

@Component({
  selector: 'app-event-component',
  standalone: true,
  imports: [],
  templateUrl: './event-component.component.html',
  styleUrl: './event-component.component.css'
})
export class EventComponentComponent {
  constructor(private router: Router,private eventService: EventService) { }

  @Input()
  public eventInfo: any;

  navigateTo(path: string) {
    this.router.navigate([path]);
  }
  public eventId: any;
  setEventId(eventId: any) {
    console.log(eventId);
    this.eventService.setEventId(eventId);  // Set eventId in the shared service
  }
}
