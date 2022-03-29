import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-timer-screen2',
  templateUrl: './timer-screen2.component.html',
  styleUrls: ['./timer-screen2.component.css']
})
export class TimerScreen2Component implements OnInit {

  formInputTimer: FormGroup;
  pause: boolean = true;
  timer: number;
  interval: any;
  internalPauseLogs: string[] = [];
  originalTimer: number;


  @Output() startTimer$ = new EventEmitter();
  @Output() resetEvent$ = new EventEmitter();
  @Output() pauseEvent$ = new EventEmitter();
  @Output() startEvent$ = new EventEmitter();
  

  constructor(
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
    if(!this.timer || this.timer<=0){
      return;
    }
    this.startTimer$.emit(this.timer); 
    this.startEvent$.emit(true);
    //this.timer = +this.formInputTimer.get('inputTimer')?.value;
    this.interval = setInterval(() => {
      if (this.timer > 0) { 
        this.timer--;
        this.startTimer$.emit(this.timer); 
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
    this.pauseEvent$.emit(true);
  }

  reset(){
    this.timer = 0;
    this.pause = true;
    clearInterval(this.interval);
    this.formInputTimer.get('inputTimer')?.reset();
    this.internalPauseLogs = [];
    this.resetEvent$.emit(true);
  }
}
