type PartOfTheCalendar = 'day' | 'month'| 'year';

export class MyDate {
    year: number;
    month: number;
    day: number;

    constructor (year: number, month: number, day: number) {
        this.year = year;
        this.month = month;
        this.day = day;
    }

    printFormat (): string {
        const {day, month, year} = this;
        return `${day}/${month}/${year}`;
    }

    add (amount: number, type: PartOfTheCalendar) {
        if (type === 'day') this.day += amount;
        if (type === 'month') this.month += amount;
        if (type === 'year')this. year += amount;
    }
}

const myDate = new MyDate(1993, 7, 7);
console.log(myDate.printFormat());
myDate.add(3, 'day');
console.log(myDate.printFormat());
myDate.add(1, 'month');
console.log(myDate.printFormat());