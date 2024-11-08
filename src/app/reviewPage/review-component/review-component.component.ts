import { Component, Input, input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-review-component',
  standalone: true,
  imports: [],
  templateUrl: './review-component.component.html',
  styleUrl: './review-component.component.css'
})
export class ReviewComponentComponent {

  constructor(private router: Router) { }
  @Input()
 public reviewInfo: any 

 navigateTo(path: string) {
  this.router.navigate([path]);
}
}
