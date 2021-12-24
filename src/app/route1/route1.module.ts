import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import { AllinonetableComponent } from "../allinonetable/allinonetable.component"
import {CalendarComponent} from "../calendar/calendar.component";
import {DashboardComponent} from "../dashboard/dashboard.component";

const routes: Routes=[
  {
    path: 'route1',
    component: AllinonetableComponent,

  },
  {
    path: 'route2',
    component: CalendarComponent,

  },
  {
    path: 'route3',
    component: DashboardComponent,
  }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
  ],
  exports: [
    RouterModule
  ]
})
export class Route1Module { }
