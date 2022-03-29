import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-timer-screen1',
  templateUrl: './timer-screen1.component.html',
  styleUrls: ['./timer-screen1.component.css']
})
export class TimerScreen1Component implements OnInit {

  @Input() timeLeft: any;

  constructor() { }

  ngOnInit(): void {
  }

}
