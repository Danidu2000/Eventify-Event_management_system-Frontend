import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-setting-page',
  standalone: true,
  imports: [],
  templateUrl: './setting-page.component.html',
  styleUrl: './setting-page.component.css'
})
export class SettingPageComponent{
  constructor(private router: Router, private location: Location) {}
  navigateTo(path: string) {
    this.router.navigate([path]);
  }

  navigateBack() {
    this.location.back(); // Navigate to the previous page
  }

}
