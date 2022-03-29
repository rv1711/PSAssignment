import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-timer-screen4',
  templateUrl: './timer-screen4.component.html',
  styleUrls: ['./timer-screen4.component.css']
})
export class TimerScreen4Component implements OnInit {

  @Input() noOfStarts: number;
  @Input() noOfPauses: number;

  constructor() { }

  ngOnInit(): void {
  }

}
