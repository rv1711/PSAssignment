import { Component, OnInit } from '@angular/core';
import { TimerServiceService } from 'src/app/services/timer-service.service';

@Component({
  selector: 'app-timer-service-screen4',
  templateUrl: './timer-service-screen4.component.html',
  styleUrls: ['./timer-service-screen4.component.css']
})
export class TimerServiceScreen4Component implements OnInit {

  noOfStarts: number = 0;
  noOfPauses: number = 0;

  constructor(
    private timerService: TimerServiceService
  ) { }


  ngOnInit(): void {
    this.timerService.startEvent$.subscribe(()=>{
      this.noOfStarts++;
    });
    this.timerService.pauseEvent$.subscribe(()=>{
      this.noOfPauses++;
    });
    this.timerService.resetEvent$.subscribe(()=>{
      this.noOfPauses = 0;
      this.noOfStarts = 0;
    });
  }

}
