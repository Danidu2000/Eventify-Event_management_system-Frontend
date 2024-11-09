import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReviewSettingFormComponent } from './review-setting-form.component';

describe('ReviewSettingFormComponent', () => {
  let component: ReviewSettingFormComponent;
  let fixture: ComponentFixture<ReviewSettingFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReviewSettingFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReviewSettingFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
