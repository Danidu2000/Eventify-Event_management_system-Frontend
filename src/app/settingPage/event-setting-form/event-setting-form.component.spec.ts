import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventSettingFormComponent } from './event-setting-form.component';

describe('EventSettingFormComponent', () => {
  let component: EventSettingFormComponent;
  let fixture: ComponentFixture<EventSettingFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EventSettingFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EventSettingFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
