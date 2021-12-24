import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AllinonetableComponent } from './allinonetable/allinonetable.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CalendarComponent } from './calendar/calendar.component';
import {RouterModule, Routes} from "@angular/router";
import {Route1Module} from "./route1/route1.module";
import { DashboardComponent } from './dashboard/dashboard.component';

import {MatIconModule} from '@angular/material/icon';
const routes: Routes =[

  {
    path: '',
    redirectTo: 'route3',
    pathMatch: 'full',
  }
]
@NgModule({
  declarations: [
    AppComponent,
    AllinonetableComponent,
    CalendarComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes),
    Route1Module,
    MatIconModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
