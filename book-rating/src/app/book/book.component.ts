import { Component, OnInit, Input } from '@angular/core';
import { Book } from '../shared/';

@Component({
  moduleId: module.id,
  selector: 'br-book',
  templateUrl: 'book.component.html',
  styleUrls: ['book.component.css']
})
export class BookComponent implements OnInit {

  // @Input Decorator == öffentliche Schnittstelle
  @Input() book: Book;

  constructor() {}

  ngOnInit() {
  }

  rateUp() {
      this.book.rateUp();
  }

  rateDown() {
      this.book.rateDown();
  }

}
