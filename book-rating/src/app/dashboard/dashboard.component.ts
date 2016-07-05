import { Component, OnInit } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'br-dashboard',
  templateUrl: 'dashboard.component.html',
  styleUrls: ['dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  books: string[];

  constructor() {
    window.setTimeout(() => {
      this.books.push('Change detection!');
    }, 1000);
  }

  ngOnInit() {
    this.books = ['Angular 2', 'AngularJS 1'];
  }

}
