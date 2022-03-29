import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CounterIORoutingModule } from './counter-io-routing.module';
import { CountDownTimerComponent } from './count-down-timer/count-down-timer.component';
import { TimerScreen1Component } from './count-down-timer/timer-screen1/timer-screen1.component';
import { TimerScreen2Component } from './count-down-timer/timer-screen2/timer-screen2.component';
import { TimerScreen3Component } from './count-down-timer/timer-screen3/timer-screen3.component';
import { TimerScreen4Component } from './count-down-timer/timer-screen4/timer-screen4.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    CountDownTimerComponent,
    TimerScreen1Component,
    TimerScreen2Component,
    TimerScreen3Component,
    TimerScreen4Component,
  ],
  imports: [
    CommonModule,
    CounterIORoutingModule,
    ReactiveFormsModule
  ]
})
export class CounterIOModule { }
