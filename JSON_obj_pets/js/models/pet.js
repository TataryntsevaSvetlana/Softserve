import { translations, pets } from '../json/index.js';

class Pet {
    constructor(pet) {
        this.breed = pet.breed;
        this.price = pet.price;
        this.quantity = pet.quantity;
        this.age = pet.age;
        this.color = pet.color;
        this.rapacity = pet.rapacity;
        this.type = pet.type;
        this.id = pet.id;
        this.gender = pet.gender;
        this.url = pet.url;
        this.quantityPetsInCart = pet.quantityPetsInCart;

   }

    addToCart() {
        if (this.quantity > 0) {
            this.quantityPetsInCart += 1;
            this.quantity -= 1;
        }
        // localStorage.setItem('pets', JSON.stringify(pets));
    }

    removeFromCart() {
        if (this.quantityPetsInCart > 0) {
            this.quantityPetsInCart -= 1;
            this.quantity += 1;
        }
        // localStorage.setItem('pets', JSON.stringify(pets));
    }


//

}

export { Pet };
