import { Pet } from './index.js'

class Bird extends Pet {
    constructor(pet, observer) {
        super(pet, observer);
        this.canfly = pet.canfly;
        this.canSpeak = pet.canSpeak;
        this.canSing = pet.canSing;
    }
}

export { Bird };
