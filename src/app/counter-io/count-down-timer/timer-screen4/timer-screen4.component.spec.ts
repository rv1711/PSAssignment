import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimerScreen4Component } from './timer-screen4.component';

describe('TimerScreen4Component', () => {
  let component: TimerScreen4Component;
  let fixture: ComponentFixture<TimerScreen4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TimerScreen4Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TimerScreen4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
