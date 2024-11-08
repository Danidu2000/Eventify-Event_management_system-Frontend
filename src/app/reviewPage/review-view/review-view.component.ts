import { Component, OnInit } from '@angular/core';
import { ReviewComponentComponent } from "../review-component/review-component.component";
import { NgFor } from '@angular/common';
import { EventService } from '../../services/event.service';

@Component({
  selector: 'app-review-view',
  standalone: true,
  imports: [ReviewComponentComponent,NgFor],
  templateUrl: './review-view.component.html',
  styleUrl: './review-view.component.css'
})
export class ReviewViewComponent implements OnInit{

  constructor(private eventService: EventService) { }

public reviewList: any = [];

ngOnInit(): void {
  this.loadReviews();
}

loadReviews() {
  let eventId = this.eventService.getEventId();
  fetch(`http://localhost:8080/review/get-list-by-event_id/${eventId}`)
  .then(response => response.json())
  .then(data => this.reviewList = data);
}

}
