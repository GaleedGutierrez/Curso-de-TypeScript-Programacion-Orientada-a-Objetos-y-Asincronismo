export class MyService {    
    static instance: MyService | null = null;
    private constructor (
        public name: string
    ) {

    }
    
    getName () {
        return this.name;
    }

    static create (name: string) {
        if (MyService.instance === null) {
            console.log('Debería entrar una vez.');
            MyService.instance = new MyService(name);
        }
        return MyService.instance;
    }

}

const myServise1 = MyService.create('Servicio 1');
const myServise2 = MyService.create('Servicio 2');
const myServise3 = MyService.create('Servicio 3');
console.log({myServise1, myServise2, myServise3});
console.log(myServise1 === myServise2);
