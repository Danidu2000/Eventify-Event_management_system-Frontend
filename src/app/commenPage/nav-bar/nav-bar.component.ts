import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit{
  activeIndex: number = 0;
  public loginStatus: any;

  setActive(index: number) {
    this.activeIndex = index;
  }


  constructor(private router: Router, private authService: AuthService) {}
  ngOnInit(): void {
    this.authService.loggedInStatus$.subscribe(isLoggedIn => {
      this.loginStatus = isLoggedIn ? "Logout" : "Login";
    });
  }

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

  navigateToSettings() {
    if (this.authService.isLoggedIn() && this.authService.getUserRole() === 'Admin') {
      this.router.navigate(['/admin-settings']);
    }else if (this.authService.isLoggedIn() && this.authService.getUserRole() === 'User') {
      this.router.navigate(['/settings']);
    }
     else {
      this.router.navigate(['/login']);
    }
  }

  navigateToCart() {
    if (this.authService.isLoggedIn()) {
      this.router.navigate(['/cart']);
    } else {
      this.router.navigate(['/login']);
    }
  }

  handleLogin() {
    if (this.authService.isLoggedIn()) {
      this.logout();
      this.loginStatus = "Login";
    } else {
      this.router.navigate(['/login']);
    }
  }
}
