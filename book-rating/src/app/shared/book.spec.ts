/* tslint:disable:no-unused-variable */

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';
import {Book} from './book';

describe('Book', () => {
  
  xit('should create an instance', () => {
    expect(new Book('Test', 'Description')).toBeTruthy();
  });

  it('should have a default rating of 0', () => {
    expect(new Book('Test', 'Description').rating).toEqual(0);
  });


  describe('Rating a book', () => {
    let book: Book;

    beforeEach(() => { book = new Book('Title', 'Description'); });

    it('should increase the rating by one when it is rated up', () => {
      book.rateUp();
      expect(book.rating).toEqual(1);
    });

    it('should decrease the rating by one when it is rated down', () => {
      book.rateUp();
      book.rateDown();
      expect(book.rating).toEqual(0);
    });
  });

  describe('Rating a book (new business rules)', () => {

    it('should not be allowed to have a rating greater than 5', () => {
      let book = new Book('Title', 'Description', 5);
      book.rateUp();
      expect(book.rating).toEqual(5);
    });

    it('should not be possible have a rating smaller than 0', () => {
      let book = new Book('Title', 'Description', 0);
      book.rateDown();
      expect(book.rating).toEqual(0);
    });
  });

});
