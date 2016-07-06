export class Book {

    private MAX_RATING = 5;
    private MIN_RATING = 0;

    static empty(): Book {
        return new Book('', '');
    }

    constructor(public title: string,
        public description: string,
        public rating = 0) { }

    rateUp() {
        if (this.rating + 1 > this.MAX_RATING) {
            return;
        }
        this.rating++;
    }

    rateDown() {
        if (this.rating - 1 < this.MIN_RATING) {
            return;
        }
        this.rating--;
    }
}
