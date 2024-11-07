import { Component, OnInit } from '@angular/core';
import { EventComponentComponent } from "../event-component/event-component.component";
import { Router } from '@angular/router';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-event-form',
  standalone: true,
  imports: [EventComponentComponent,NgFor],
  templateUrl: './event-form.component.html',
  styleUrl: './event-form.component.css'
})
export class EventFormComponent implements OnInit{

  public eventList: any = [];

  constructor(private router: Router) { }
  ngOnInit(): void {
    this.loadEvents();
  }
  loadEvents() {
    fetch('http://localhost:8080/event/get-all')
    .then(data => data.json())
    .then(event => this.eventList = event);
  }
  navigateTo(path: string) {
    this.router.navigate([path]);
  }
}
