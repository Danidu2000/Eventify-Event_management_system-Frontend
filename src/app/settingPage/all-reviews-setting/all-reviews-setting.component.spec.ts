import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllReviewsSettingComponent } from './all-reviews-setting.component';

describe('AllReviewsSettingComponent', () => {
  let component: AllReviewsSettingComponent;
  let fixture: ComponentFixture<AllReviewsSettingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AllReviewsSettingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllReviewsSettingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
