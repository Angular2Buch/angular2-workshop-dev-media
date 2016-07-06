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
  isValid: boolean;

  constructor() { }

  ngOnInit() {
    this.books = [
      new Book('Angular 2', 'Ein Framework schreib Geschichte'),
      new Book('AngularJS', 'Oldy but Gooldie')
    ];
  }

  private sortBooks() {
    this.books.sort((a, b) => b.rating - a.rating);
  }

  dataChanged(title: HTMLInputElement, description: HTMLInputElement) {
    this.isValid = !!(title.value && description.value);
  }

  add(title: HTMLInputElement, description: HTMLInputElement) {

    let newBook = new Book(title.value, description.value, 4);
    this.books.push(newBook);

    title.value = '';
    description.value = '';

    this.sortBooks();
  }
}
