import { pets } from '../json/index.js';
import { petFactory } from "../models";


class PetsCollection {

    fetchData() {
        let petsFromServer = JSON.parse(localStorage.getItem('pets'));
        if (!petsFromServer) {
            localStorage.setItem('pets', JSON.stringify(pets));
            petsFromServer = pets;
        }

        this.petsModels = petsFromServer.map(pet => petFactory(pet));
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

    placeOrder() {
        this.petsModels.forEach(pet => {
            pet.quantityPetsInCart = 0;
        });
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