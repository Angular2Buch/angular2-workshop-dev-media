import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Book } from '../shared/';
import { ROUTER_DIRECTIVES } from '@angular/router';

@Component({
  moduleId: module.id,
  selector: 'br-book',
  templateUrl: 'book.component.html',
  styleUrls: ['book.component.css'],
  directives: [ROUTER_DIRECTIVES]
})
export class BookComponent implements OnInit {

  // öffentliche Schnittstellen
  @Input() book: Book;
  @Output() rated: EventEmitter<Book> = new EventEmitter<Book>();

  constructor() {}

  ngOnInit() {
  }

  rateUp() {
      this.book.rateUp();
      this.rated.emit(this.book);
  }

  rateDown() {
      this.book.rateDown();
      this.rated.emit(this.book);
  }

}
