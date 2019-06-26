import { Pet } from './index.js'
import {translations} from "../json/index.js";

class Fish extends Pet {
    constructor(pet, observer) {
        super(pet, observer);
        this.freshwater = pet.freshwater;
        this.zone = pet.zone;
    }

    getSpacialInfo() {
        return `${translations.freshwater[this.lang]}: ${translations[this.freshwater][this.lang]}, ${translations.zone[this.lang]}: ${translations[this.zone][this.lang]}`
    }
}

export { Fish };