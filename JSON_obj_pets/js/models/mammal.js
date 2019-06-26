import { Pet } from './index.js'
import {translations} from "../json/index.js";

class Mammal extends Pet {
    constructor(pet, observer) {
        super(pet, observer);
        this.fur = pet.fur;
        this.pedigree = pet.pedigree;
        this.dockedTail = pet.dockedTail;
        this.shortPaws = pet.shortPaws;
    }

    getSpacialInfo() {
        return `${translations.fur[this.lang]}: ${translations[this.fur][this.lang]},
        ${translations.pedigree[this.lang]}: ${translations[this.pedigree][this.lang]},
        ${translations.dockedTail[this.lang]}: ${translations[this.dockedTail][this.lang]},
        ${translations.shortPaws[this.lang]}: ${translations[this.shortPaws][this.lang]}`
    }
}

export { Mammal };