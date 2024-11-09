import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminSettingPageComponent } from './admin-setting-page.component';

describe('AdminSettingPageComponent', () => {
  let component: AdminSettingPageComponent;
  let fixture: ComponentFixture<AdminSettingPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminSettingPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminSettingPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
