import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimerServiceScreen4Component } from './timer-service-screen4.component';

describe('TimerServiceScreen4Component', () => {
  let component: TimerServiceScreen4Component;
  let fixture: ComponentFixture<TimerServiceScreen4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TimerServiceScreen4Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TimerServiceScreen4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
