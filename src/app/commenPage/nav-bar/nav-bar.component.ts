import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [],
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent {
  activeIndex: number = 0;

  setActive(index: number) {
    this.activeIndex = index;
  }


  constructor(private router: Router, private authService: AuthService) {}

  navigateTo(path: string) {
    this.router.navigate([path]);
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/']);
  }

  navigateToEvent() {
    if (this.authService.isLoggedIn()) {
      this.router.navigate(['/event']);
    } else {
      this.router.navigate(['/login']);
    }
  }
}
