/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';

import { Book } from '../shared';
import { BookComponent } from './book.component';

describe('Component: Book', () => {
  it('should create an instance', () => {
    let component = new BookComponent();
    expect(component).toBeTruthy();
  });

  describe('Rate a book', () => {
    beforeEachProviders(() => [BookComponent]); // !

    it('should allow ratings, by increasing the rating of the book enity', () => {
      let component = new BookComponent();
      let testBook = new Book('title', 'description', 2);

      component.book = testBook;
      component.rateUp();

      expect(testBook.rating).toBe(3);
    });
  });
});


