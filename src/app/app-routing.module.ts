import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ScrollableDivsComponent } from './scrollable-divs/scrollable-divs.component';
import { ShoppingAppComponent } from './shopping-app/shopping-app.component';
import { StudentMarksComponent } from './student-marks/student-marks.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'shoppingApp',
    component: ShoppingAppComponent
  },
  {
    path: 'CountDownTimerEventEmitter',
    loadChildren: ()=> import('src/app/counter-io/counter-io.module').then(m=>m.CounterIOModule)
  },
  {
    path: 'CountDownTimerService',
    loadChildren: ()=> import('src/app/counter-services/counter-services.module').then(m=>m.CounterServicesModule)
  },
  {
    path:  'StudentMarks',
    component: StudentMarksComponent
  },
  {
    path:  'ScrollableDivs',
    component: ScrollableDivsComponent
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
