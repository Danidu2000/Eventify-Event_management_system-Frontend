import { Component } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [],
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent {
  isActive: boolean = false;

  onClick(): void {
    this.isActive = true;
  }

  onMouseLeave(): void {
    if (!this.isActive) {
      this.isActive = false;
    }
  }
}
