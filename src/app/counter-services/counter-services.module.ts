import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CounterServicesRoutingModule } from './counter-services-routing.module';
import { CountDownTimerServicesComponent } from './count-down-timer-services/count-down-timer-services.component';
import { TimerServiceScreen2Component } from './count-down-timer-services/timer-service-screen2/timer-service-screen2.component';
import { TimerServiceScreen1Component } from './count-down-timer-services/timer-service-screen1/timer-service-screen1.component';
import { TimerServiceScreen3Component } from './count-down-timer-services/timer-service-screen3/timer-service-screen3.component';
import { TimerServiceScreen4Component } from './count-down-timer-services/timer-service-screen4/timer-service-screen4.component';
import { ReactiveFormsModule } from '@angular/forms';
import { TimerServiceService } from '../services/timer-service.service';


@NgModule({
  declarations: [
    CountDownTimerServicesComponent,
    TimerServiceScreen1Component,
    TimerServiceScreen2Component,
    TimerServiceScreen3Component,
    TimerServiceScreen4Component,
  ],
  imports: [
    CommonModule,
    CounterServicesRoutingModule,
    ReactiveFormsModule
  ],
  providers: [
    TimerServiceService
  ]
})
export class CounterServicesModule { }
