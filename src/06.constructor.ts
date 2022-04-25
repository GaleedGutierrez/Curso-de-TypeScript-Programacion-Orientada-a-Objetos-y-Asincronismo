type PartOfTheCalendar = 'day' | 'month'| 'year';

export class MyDate {
    #day: number;

    constructor (
        public year: number = 1993,
        public month: number = 7,
        day: number = 1
    ) {
        this.#day = day;
    }

    printFormat (): string {
        const { year } = this;
        const day = this.#addPadding(this.#day);
        const month = this.#addPadding(this.month);
        return `${day}/${month}/${year}`;
    }

    add (amount: number, type: PartOfTheCalendar) {
        if (type === 'day') this.#day += amount;
        if (type === 'month') this.month += amount;
        if (type === 'year') this. year += amount;
    }

    #addPadding (value: number) {
        if (value < 10) return `0${value}`;
        return `${value}`;
    }
}

const myDate = new MyDate(2020);
const myDate2 = new MyDate(2021);
console.log({myDate});
console.log(myDate.printFormat());