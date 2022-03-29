import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CountDownTimerComponent } from './count-down-timer/count-down-timer.component';

const routes: Routes = [
  {
    path: "",
    component: CountDownTimerComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CounterIORoutingModule { }
