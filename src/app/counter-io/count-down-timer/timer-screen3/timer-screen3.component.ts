import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-timer-screen3',
  templateUrl: './timer-screen3.component.html',
  styleUrls: ['./timer-screen3.component.css']
})
export class TimerScreen3Component implements OnInit {

  @Input() logs : string[]; 
  constructor() { }

  ngOnInit(): void {
  }

}
