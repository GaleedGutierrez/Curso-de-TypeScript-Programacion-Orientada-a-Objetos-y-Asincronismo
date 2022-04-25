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

    add (amount: number, type: PartOfTheCalendar): void {
        if (type === 'day') this.#day += amount;
        if (type === 'month') this.month += amount;
        if (type === 'year') this. year += amount;
    }

    #addPadding (value: number): string {
        if (value < 10) return `0${value}`;
        return `${value}`;
    }

    get day (): number {
        // Code
        return this.#day;
    }

    get isLeapYear (): boolean {
        const { year } = this;
        if (year % 4 === 0) return false;
        if (year % 100 === 0) return true;
        return year % 4 === 0;
    }

    // get myReturn () {

    // } // Error:
}

const myDate = new MyDate(2020);
const myDate2 = new MyDate(2000);
const myDate3 = new MyDate(2001);
const myDate4 = new MyDate(2004);
// console.log({myDate});
// console.log(myDate.printFormat());

myDate.day;
console.log('My Date:',myDate.day, myDate.isLeapYear);
console.log('My Date 2:',myDate2.day, myDate2.isLeapYear);
console.log('My Date 3:',myDate3.day, myDate3.isLeapYear);
console.log('My Date 4:',myDate4.day, myDate4.isLeapYear);