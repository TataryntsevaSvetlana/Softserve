import { Pet } from './index.js'
import {translations} from "../json/index.js";

class Bird extends Pet {
    constructor(pet) {
        super(pet);
        this.canfly = pet.canfly;
        this.canSpeak = pet.canSpeak;
    }

    getSpacialInfo() {
        return `${translations.canfly[this.lang]}: ${translations[this.canfly][this.lang]},${translations.canSpeak[this.lang]}: ${translations[this.canSpeak][this.lang]}`
    }
}

export { Bird };
