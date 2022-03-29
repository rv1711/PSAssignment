import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { TimerServiceService } from 'src/app/services/timer-service.service';

@Component({
  selector: 'app-timer-service-screen2',
  templateUrl: './timer-service-screen2.component.html',
  styleUrls: ['./timer-service-screen2.component.css']
})
export class TimerServiceScreen2Component implements OnInit {

  formInputTimer: FormGroup;
  pause: boolean = true;
  timer: number;
  interval: any;
  internalPauseLogs: string[] = [];
  originalTimer: number;

  constructor(
    private timerService: TimerServiceService,
    private formBuilder: FormBuilder
  ) { }


  ngOnInit(): void {
    this.formInputTimer = this.formBuilder.group({
      inputTimer: []
    });
    this.formInputTimer.get('inputTimer')?.valueChanges.subscribe((value)=>{
      console.log("Timer", value);
      this.timer = +value;
      this.originalTimer = +value;
    });
  }

  start() {
    if (!this.timer || this.timer <= 0) {
      return;
    }
    this.timerService.startTimer$.next(this.timer);
    this.timerService.startEvent$.next(true);
    this.interval = setInterval(() => {
      if (this.timer > 0) {
        this.timer--;
        this.timerService.startTimer$.next(this.timer);
      } else{
        this.pause = true;
        this.timer = this.originalTimer;
        clearInterval(this.interval);
      }
    }, 1000);
    this.pause = false;
  }

  pauseTimer(){
    clearInterval(this.interval);
    this.pause = true;
    let pauseStr: string = 'Paused at ' + this.timer;
    this.internalPauseLogs.push(pauseStr)
    this.timerService.pauseEvent$.next(true);
  }

  reset(){
    this.timer = 0;
    this.pause = true;
    clearInterval(this.interval);
    this.formInputTimer.get('inputTimer')?.reset();
    this.internalPauseLogs = [];
    this.timerService.resetEvent$.next(true);
  }

}
