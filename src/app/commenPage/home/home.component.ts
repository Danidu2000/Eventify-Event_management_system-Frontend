import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import AOS from 'aos';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{
  constructor(private router: Router) {}

  ngOnInit() {
    AOS.init({
      duration: 1000,  // Animation duration in milliseconds
      once: false,     // Set to false to trigger animations on every scroll
    });

    // Refresh AOS on route change
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        AOS.refreshHard(); // or use AOS.refresh() if refreshHard() is not available
      }
    });
  }
}
