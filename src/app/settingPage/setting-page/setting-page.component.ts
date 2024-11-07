import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-setting-page',
  standalone: true,
  imports: [],
  templateUrl: './setting-page.component.html',
  styleUrl: './setting-page.component.css'
})
export class SettingPageComponent{
  constructor(private router: Router) {}
  navigateTo(path: string) {
    this.router.navigate([path]);
  }

}
