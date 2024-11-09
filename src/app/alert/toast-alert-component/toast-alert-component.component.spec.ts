import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToastAlertComponentComponent } from './toast-alert-component.component';

describe('ToastAlertComponentComponent', () => {
  let component: ToastAlertComponentComponent;
  let fixture: ComponentFixture<ToastAlertComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ToastAlertComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ToastAlertComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
