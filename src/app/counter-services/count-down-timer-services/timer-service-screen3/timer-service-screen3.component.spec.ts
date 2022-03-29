import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimerServiceScreen3Component } from './timer-service-screen3.component';

describe('TimerServiceScreen3Component', () => {
  let component: TimerServiceScreen3Component;
  let fixture: ComponentFixture<TimerServiceScreen3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TimerServiceScreen3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TimerServiceScreen3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
