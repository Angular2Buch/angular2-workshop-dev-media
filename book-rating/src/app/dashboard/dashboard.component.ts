import { Component, OnInit } from '@angular/core';
import { Book } from '../shared/';
import { BookComponent } from '../book/';
import { CreateBookComponent } from '../create-book'; // !!

@Component({
  moduleId: module.id,
  selector: 'br-dashboard',
  templateUrl: 'dashboard.component.html',
  styleUrls: ['dashboard.component.css'],
  directives: [BookComponent, CreateBookComponent]  // !!
})
export class DashboardComponent implements OnInit {
  books: Book[];

  ngOnInit() {
    this.books = [
      new Book('Angular 2', 'Ein Framework schreib Geschichte'),
      new Book('AngularJS', 'Oldy but Gooldie')
    ];
  }

  sortBooks() {
    this.books.sort((a, b) => b.rating - a.rating);
  }

  // template: <br-create-book (bookCreated)="add($event)"></br-create-book>
  add(book: Book) {
    this.books.push(book);
  }
}
