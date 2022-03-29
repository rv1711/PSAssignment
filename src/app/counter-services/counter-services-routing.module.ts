import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CountDownTimerServicesComponent } from './count-down-timer-services/count-down-timer-services.component';

const routes: Routes = [
  {
    path:'',
    component: CountDownTimerServicesComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CounterServicesRoutingModule { }
