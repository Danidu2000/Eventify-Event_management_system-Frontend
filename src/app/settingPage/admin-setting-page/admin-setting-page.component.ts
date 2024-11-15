import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-admin-setting-page',
  standalone: true,
  imports: [],
  templateUrl: './admin-setting-page.component.html',
  styleUrl: './admin-setting-page.component.css'
})
export class AdminSettingPageComponent {
  constructor(private router: Router,private location: Location) {}
  navigateTo(path: string) {
    this.router.navigate([path]);
  }

  navigateBack() {
    this.location.back(); // Navigate to the previous page
  }
}
