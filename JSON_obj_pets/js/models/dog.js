import { Mammal } from './mammal.js'

class Dog extends Mammal {
    constructor(pet, observer) {
        super(pet, observer);
        this.specialization = pet.specialization;
    }

    getInfo() {
        return `СОБАЦЮРА`
    }
}

export { Dog }