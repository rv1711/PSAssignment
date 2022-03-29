import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimerScreen3Component } from './timer-screen3.component';

describe('TimerScreen3Component', () => {
  let component: TimerScreen3Component;
  let fixture: ComponentFixture<TimerScreen3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TimerScreen3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TimerScreen3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
