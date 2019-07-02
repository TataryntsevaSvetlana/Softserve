import { Mammal } from './mammal.js'
import {translations} from "../json/index.js";

class Cat extends Mammal {
    constructor(pet) {
        super(pet);
        this.lopiness = pet.lopiness;
    }

    // getSpacialInfo() {
    //     return `${translations.lopiness[this.lang]}: ${translations[this.lopiness][this.lang]}`
    // }
}

export { Cat };