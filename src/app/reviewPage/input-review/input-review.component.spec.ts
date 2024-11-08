import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputReviewComponent } from './input-review.component';

describe('InputReviewComponent', () => {
  let component: InputReviewComponent;
  let fixture: ComponentFixture<InputReviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InputReviewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InputReviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
