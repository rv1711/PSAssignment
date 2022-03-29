import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimerScreen1Component } from './timer-screen1.component';

describe('TimerScreen1Component', () => {
  let component: TimerScreen1Component;
  let fixture: ComponentFixture<TimerScreen1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TimerScreen1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TimerScreen1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
