import { Component, OnInit } from '@angular/core';
import { TimerServiceService } from 'src/app/services/timer-service.service';

@Component({
  selector: 'app-timer-service-screen1',
  templateUrl: './timer-service-screen1.component.html',
  styleUrls: ['./timer-service-screen1.component.css']
})
export class TimerServiceScreen1Component implements OnInit {

  timeLeft: number = 0;

  constructor(
    private timerService: TimerServiceService
  ) { }

  ngOnInit(): void {
    this.timerService.startTimer$.subscribe(val => {
      this.timeLeft = val;
    });
    this.timerService.resetEvent$.subscribe(()=>{
      this.timeLeft = 0;
    });
  }

}
