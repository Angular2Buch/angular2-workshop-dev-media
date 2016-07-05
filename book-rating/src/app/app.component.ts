import { Component } from '@angular/core';
import { DashboardComponent } from './dashboard/';

@Component({
  moduleId: module.id,
  selector: 'br-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  directives: [DashboardComponent]
})
export class AppComponent {
  title = 'Angular 2 works!';
}
