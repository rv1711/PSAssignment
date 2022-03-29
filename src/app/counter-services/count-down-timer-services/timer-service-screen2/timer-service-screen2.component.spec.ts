import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimerServiceScreen2Component } from './timer-service-screen2.component';

describe('TimerServiceScreen2Component', () => {
  let component: TimerServiceScreen2Component;
  let fixture: ComponentFixture<TimerServiceScreen2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TimerServiceScreen2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TimerServiceScreen2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
