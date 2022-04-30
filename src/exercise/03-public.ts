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
        if (type === 'year') this. year += amount;
    }
}

const myDate = new MyDate(1993, 7, 9);
console.log(myDate.day);
myDate.day = 12;
console.log(myDate.day);
myDate.add(13, 'day');

MyDate.prototype.add = function () {
    console.log('Change');
};

myDate.add(13, 'year');