import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-count-down-timer',
  templateUrl: './count-down-timer.component.html',
  styleUrls: ['./count-down-timer.component.css']
})
export class CountDownTimerComponent implements OnInit {

  timer: number=0;
  noOfStarts: number = 0;
  noOfPauses: number = 0;
  logs: string[] = [];

  constructor(
    private datePipe: DatePipe
  ) { }

  ngOnInit(): void {
  }

  start($event: number) { 
    this.timer = $event;
  }
  incStart(){
    this.noOfStarts++;
    let startStr = "Started at "+ this.datePipe.transform(new Date(), 'dd-MM-YYYY h:mm:ss a');
    this.logs.push(startStr);
  }
  pause(){
    this.noOfPauses++;
    let pauseStr = "Paused at "+ this.datePipe.transform(new Date(), 'dd-MM-YYYY h:mm:ss a');
    this.logs.push(pauseStr);
  }
  reset(){
    this.timer = 0;
    this.noOfStarts = 0;
    this.noOfPauses = 0;
    this.logs = [];
  }
}
