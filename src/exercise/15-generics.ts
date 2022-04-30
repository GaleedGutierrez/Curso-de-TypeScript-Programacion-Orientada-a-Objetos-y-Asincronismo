import { Dog } from './09-protected';

// function getValue (value: unknown) {
//     return value;
// }

// function getValue (value: string | number) {
//     return value;
// }

function getValue <T>(value: T) {
    return value;
}

getValue<number>(12).toFixed();
getValue<string>('12').toLowerCase();
getValue<number[]>([1, 2, 3]).forEach(() => {});
const fifi = new Dog('Galeed', 'Fifi');
getValue<Dog>(fifi);
