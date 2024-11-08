import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  constructor() { }

  private eventId: any;

  setEventId(eventId: any) {
    this.eventId = eventId;
  }

  getEventId() {
    return this.eventId;
  }
}
