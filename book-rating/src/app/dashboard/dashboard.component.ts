import { Component } from '@angular/core';
import { Book } from '../shared/';
import { BookComponent } from '../book/';
import { CreateBookComponent } from '../create-book/';
import { Http } from '@angular/http'; // HTTP_PROVIDERS nicht vergessen

@Component({
  moduleId: module.id,
  selector: 'br-dashboard',
  templateUrl: 'dashboard.component.html',
  styleUrls: ['dashboard.component.css'],
  directives: [BookComponent, CreateBookComponent]
})
export class DashboardComponent {

  books: Book[] = [];

  constructor(private http: Http) {
    this.http.get('http://book-monkey2-api.angular2buch.de/books')
      .subscribe(response => {
        this.books = response
          .json()
          .map(rawBook => new Book(rawBook.title, rawBook.description, rawBook.rating));
      });
  }

  sortBooks() {
    this.books.sort((a, b) => b.rating - a.rating);
  }

  add(book: Book) {
    this.books.push(book);
  }
}
