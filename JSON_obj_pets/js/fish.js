class Fish extends Pet {
    constructor(pet, observer) {
        super(pet, observer);
        this.freshwater = pet.freshwater;
        this.zone = pet.zone;
    }
}