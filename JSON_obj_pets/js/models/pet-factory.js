import { Cat, Dog, Fish, Bird } from './index.js';

function petFactory(pet, observer) {
    switch (pet.type) {
        case 'cat': {
            return new Cat(pet, observer);
        }
        case 'dog': {
            return new Dog(pet, observer);
        }
        case 'fish': {
            return new Fish(pet, observer);
        }
        case 'bird': {
            return new Bird(pet, observer);
        }

        default: {
            console.error('unsupported pet type')
        }
    }
}

export { petFactory };