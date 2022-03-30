import { DatePipe } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import { CountDownTimerComponent } from './count-down-timer/count-down-timer.component';
// import { TimerScreen1Component } from './count-down-timer/timer-screen1/timer-screen1.component';
// import { TimerScreen2Component } from './count-down-timer/timer-screen2/timer-screen2.component';
// import { TimerScreen3Component } from './count-down-timer/timer-screen3/timer-screen3.component';
// import { TimerScreen4Component } from './count-down-timer/timer-screen4/timer-screen4.component';
// import { CountDownTimerServicesComponent } from './count-down-timer-services/count-down-timer-services.component';
// import { TimerServiceScreen1Component } from './count-down-timer-services/timer-service-screen1/timer-service-screen1.component';
// import { TimerServiceScreen2Component } from './count-down-timer-services/timer-service-screen2/timer-service-screen2.component';
// import { TimerServiceScreen3Component } from './count-down-timer-services/timer-service-screen3/timer-service-screen3.component';
// import { TimerServiceScreen4Component } from './count-down-timer-services/timer-service-screen4/timer-service-screen4.component';
import { StudentMarksComponent } from './student-marks/student-marks.component';
import { ScrollableDivsComponent } from './scrollable-divs/scrollable-divs.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { ShoppingAppComponent } from './shopping-app/shopping-app.component';
import { NgSelectModule } from '@ng-select/ng-select';

@NgModule({
  declarations: [
    AppComponent,
    StudentMarksComponent,
    ScrollableDivsComponent,
    HeaderComponent,
    HomeComponent,
    ShoppingAppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgSelectModule,
    FormsModule
  ],
  providers: [
    DatePipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
