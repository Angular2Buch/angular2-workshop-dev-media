import { Component, OnInit } from '@angular/core';
import { Book } from '../shared/';
import { BookComponent } from '../book/';

@Component({
  moduleId: module.id,
  selector: 'br-dashboard',
  templateUrl: 'dashboard.component.html',
  styleUrls: ['dashboard.component.css'],
  directives: [BookComponent]
})
export class DashboardComponent implements OnInit {

  books: Book[];

  constructor() {  }

  ngOnInit() {
    this.books = [
      new Book('Angular 2', 'Test'),
      new Book('Angular', 'Test')];
  }

}
