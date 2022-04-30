type PartOfTheCalendar = 'day' | 'month'| 'year';

export class MyDate {
    #day: number;
    #month: number

    constructor (
        public year: number = 1993,
        month: number = 7,
        day: number = 1
    ) {
        this.#day = day;
        this.#month = month;
    }

    printFormat (): string {
        const { year } = this;
        const day = this.#addPadding(this.#day);
        const month = this.#addPadding(this.#month);
        return `${day}/${month}/${year}`;
    }

    add (amount: number, type: PartOfTheCalendar): void {
        if (type === 'day') this.#day += amount;
        if (type === 'month') this.#month += amount;
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

    get month () {
        return this.#month;
    }

    set month (newValue: number) {
        if (newValue >= 1 && newValue <= 12) {
            this.#month = newValue;
        } else {
            throw new Error('Month our of range.');
        }
    }
}

const myDate = new MyDate(2020, 2, 10);
myDate.month = 8;
console.log({myDate});
myDate.month = 78;