import { Component } from '@angular/core';
import {Router} from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'exam';
  constructor(private router: Router){

  }
  public navigateToDashboard(): void{
    this.router.navigate(['route3'])
  }
  public navigateToAllinonetable(): void{
    this.router.navigate(['route1'])
  }
  public navigateToCalendar(): void{
    this.router.navigate(['route2'])
  }
}
