class Cat extends Mammal {
    constructor(pet, observer) {
        super(pet, observer);
        this.lopiness = pet.lopiness;
    }
}