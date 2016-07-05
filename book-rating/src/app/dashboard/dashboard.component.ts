import { Component, OnInit } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'br-dashboard',
  templateUrl: 'dashboard.component.html',
  styleUrls: ['dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  books: string[];
  test: string;

  constructor() {  }

  ngOnInit() {
    this.test = 'javascript:alert(1)';
    this.books = ['Angular 2', 'AngularJS 1', '<b>TEST</b>'];
  }

}
