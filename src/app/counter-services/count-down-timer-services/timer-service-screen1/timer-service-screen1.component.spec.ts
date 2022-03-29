import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimerServiceScreen1Component } from './timer-service-screen1.component';

describe('TimerServiceScreen1Component', () => {
  let component: TimerServiceScreen1Component;
  let fixture: ComponentFixture<TimerServiceScreen1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TimerServiceScreen1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TimerServiceScreen1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
