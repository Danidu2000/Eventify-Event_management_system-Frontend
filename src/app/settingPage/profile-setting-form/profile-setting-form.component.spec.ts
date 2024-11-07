import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileSettingFormComponent } from './profile-setting-form.component';

describe('ProfileSettingFormComponent', () => {
  let component: ProfileSettingFormComponent;
  let fixture: ComponentFixture<ProfileSettingFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProfileSettingFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfileSettingFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
