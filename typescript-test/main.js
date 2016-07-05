// Strg + Shift + B
"use strict";
var Book = (function () {
    function Book(title, comment, rating) {
        if (rating === void 0) { rating = 0; }
        this.title = title;
        this.comment = comment;
        this.rating = rating;
    }
    Book.prototype.rateUp = function () {
        this.rating++;
    };
    return Book;
}());
exports.Book = Book;
var newBook = new Book("test", "test", 2);
newBook.rateUp();
console.log("das buch hat den wert", newBook.rating);
//# sourceMappingURL=main.js.map