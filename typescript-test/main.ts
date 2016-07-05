// Strg + Shift + B

 export class Book {
    constructor(
        public title: string,
        public comment: string,
        public rating: number = 0) {

    }

    rateUp() {
        this.rating++;
    }
}

var newBook : Book = new Book("test", "test", 2); 
newBook.rateUp();

console.log("das buch hat den wert", newBook.rating);