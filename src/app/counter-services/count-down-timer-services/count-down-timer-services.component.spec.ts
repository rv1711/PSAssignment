import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountDownTimerServicesComponent } from './count-down-timer-services.component';

describe('CountDownTimerServicesComponent', () => {
  let component: CountDownTimerServicesComponent;
  let fixture: ComponentFixture<CountDownTimerServicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CountDownTimerServicesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CountDownTimerServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
