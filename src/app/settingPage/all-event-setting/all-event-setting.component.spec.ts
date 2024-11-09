import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllEventSettingComponent } from './all-event-setting.component';

describe('AllEventSettingComponent', () => {
  let component: AllEventSettingComponent;
  let fixture: ComponentFixture<AllEventSettingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AllEventSettingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllEventSettingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
