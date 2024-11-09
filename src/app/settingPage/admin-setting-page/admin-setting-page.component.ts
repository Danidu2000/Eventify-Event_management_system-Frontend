import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-setting-page',
  standalone: true,
  imports: [],
  templateUrl: './admin-setting-page.component.html',
  styleUrl: './admin-setting-page.component.css'
})
export class AdminSettingPageComponent {
  constructor(private router: Router) {}
  navigateTo(path: string) {
    this.router.navigate([path]);
  }
}
