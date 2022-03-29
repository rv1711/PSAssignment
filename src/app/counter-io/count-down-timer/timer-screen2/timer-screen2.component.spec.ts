import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimerScreen2Component } from './timer-screen2.component';

describe('TimerScreen2Component', () => {
  let component: TimerScreen2Component;
  let fixture: ComponentFixture<TimerScreen2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TimerScreen2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TimerScreen2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
