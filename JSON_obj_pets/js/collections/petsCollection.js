import { pets } from '../json/index.js';
import { petFactory } from "../models/index.js";


class PetsCollection {
    fetchData() {
        let loadedPets = JSON.parse(localStorage.getItem('pets'));
        if (!loadedPets) {
            localStorage.setItem('pets', JSON.stringify(pets));
            loadedPets = pets;
        }

        this.petsModels = loadedPets.map(pet => petFactory(pet));
    }

    getPetsModels() {
        return this.petsModels;
    }

    getPetById(id) {
        return this.petsModels.find(pet => pet.id === Number(id));
    }

    getPetsInCart() {
        return this.petsModels.filter(pet => pet.quantityPetsInCart > 0);
    }

    getTotalPrice() {
        return this.petsModels.reduce((acc, pet) => acc + (pet.price * pet.quantityPetsInCart), 0);
    }

    getQuantityInCart() {
        return this.petsModels.reduce((acc, pet) => acc + pet.quantityPetsInCart, 0);
    }

    checkout() {
        this.petsModels.forEach(pet => {
            pet.quantityPetsInCart = 0;
        });

        localStorage.setItem('pets', JSON.stringify(this.petsModels));
    }
    removeAllFromCart() {
        this.petsModels.forEach(pet => {
            pet.quantity = pet.quantity + pet.quantityPetsInCart;
            pet.quantityPetsInCart = 0;
        });

        localStorage.setItem('pets', JSON.stringify(this.petsModels));
    }
    filterPets(types) {
        this.petsModels.forEach(pet => {
           if (!types.includes(pet.type)) {
               pet.display = false;
           } else {
               pet.display = true;
           }
        });
    }

}

export { PetsCollection };