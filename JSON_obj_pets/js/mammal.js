class Mammal extends Pet {
    constructor(pet, observer) {
        super(pet, observer);
        this.fur = pet.fur;
        this.pedigree = pet.pedigree;
        this.dockedTail = pet.dockedTail;
        this.shortPaws = pet.shortPaws;
    }
}