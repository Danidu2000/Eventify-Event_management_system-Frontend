import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-event-component',
  standalone: true,
  imports: [],
  templateUrl: './event-component.component.html',
  styleUrl: './event-component.component.css'
})
export class EventComponentComponent {
  @Input()
  public eventInfo: any;
}
