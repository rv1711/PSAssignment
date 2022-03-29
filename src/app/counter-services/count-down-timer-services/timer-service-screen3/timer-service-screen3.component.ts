import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { TimerServiceService } from 'src/app/services/timer-service.service';

@Component({
  selector: 'app-timer-service-screen3',
  templateUrl: './timer-service-screen3.component.html',
  styleUrls: ['./timer-service-screen3.component.css']
})
export class TimerServiceScreen3Component implements OnInit {

  logs: string[] = [];

  constructor(
    private timerService: TimerServiceService,
    private datePipe: DatePipe
  ) { }

  ngOnInit(): void {
    this.timerService.resetEvent$.subscribe(()=>{
      this.logs=[];
    });
    this.timerService.pauseEvent$.subscribe(()=>{
      let pauseStr = "Paused at "+ this.datePipe.transform(new Date(), 'dd-MM-YYYY h:mm:ss a');
      this.logs.push(pauseStr);
    });
    this.timerService.startEvent$.subscribe(()=>{
      let startStr = "Started at "+ this.datePipe.transform(new Date(), 'dd-MM-YYYY h:mm:ss a');
      this.logs.push(startStr);
    });
  }

}
