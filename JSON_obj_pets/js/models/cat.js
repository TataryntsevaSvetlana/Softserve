import { Mammal } from './mammal.js'

class Cat extends Mammal {
    constructor(pet, observer) {
        super(pet, observer);
        this.lopiness = pet.lopiness;
    }
}

export { Cat };