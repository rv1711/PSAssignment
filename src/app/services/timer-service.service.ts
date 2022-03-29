import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable()
export class TimerServiceService {

  public resetEvent$ = new Subject<boolean>();
  public pauseEvent$ = new Subject<boolean>();
  public startTimer$ = new Subject<number>();
  public startEvent$ = new Subject<boolean>();

  constructor() { }
}
