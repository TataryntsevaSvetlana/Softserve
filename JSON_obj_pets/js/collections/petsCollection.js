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

    getPetsByBreed(categories) {
        console.log(categories);
        return this.petsModels.forEach(pet => {
            const matches = categories.some(c => {
                return pet[c.category] === c.categoryValue;
            });

            if (matches) {
                pet.display = true;
            } else {
                pet.display = false;
            }
        });
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

    filterPets(categories) {

        if (categories.length === 0) {
            this.petsModels.forEach(pet => {
                pet.display = true;
            });
        } else {

            this.petsModels.forEach(pet => {
                const matches = categories.some(c => {
                    return pet[c.category] === c.categoryValue;
                });

                if (matches) {
                    pet.display = true;
                } else {
                    pet.display = false;
                }
            });
        }
    }

}

export { PetsCollection };