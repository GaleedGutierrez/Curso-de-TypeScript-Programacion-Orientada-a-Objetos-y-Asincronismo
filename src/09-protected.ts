export abstract class Animal {
    constructor (protected name: string) {
    }

    move () {
        console.log("Moving along!");
    }

    gretting () {
        return `Hello, I'm ${this.name}`;
    }

    protected doSomething () {
        console.log('dooo');
    }
}

export class Dog extends Animal {
    constructor (public owener: string, name: string) {
        super(name);
    }

    woof (times: number): void {
        for (let i = 0; i < times; i++) {
            console.log(`Woof! ${this.name}`);
        }
        this.doSomething();
    }

    move () {
        console.log('Moving as a dog');
        super.move();
    }
}
// const fifi = new Animal("Fifi");

// fifi.move();
// console.log(fifi.gretting());

const cheis = new Dog("Galeed", "Cheis");
cheis.move();
// console.log(cheis.gretting());
// cheis.woof(1);
// cheis.name = 'Other name';
// cheis.woof(1);
// cheis.doSomthing();