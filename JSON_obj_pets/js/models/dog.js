import { Mammal } from './mammal.js'
import {translations} from "../json/index.js";

class Dog extends Mammal {
    constructor(pet, observer) {
        super(pet, observer);
        this.specialization = pet.specialization;
    }

    getSpacialInfo() {
        return `${translations.specialization[this.lang]}: ${translations[this.specialization][this.lang]}`
    }
}

export { Dog }