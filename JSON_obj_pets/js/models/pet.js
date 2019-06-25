import { translations } from '../json/index.js';

class Pet {
    constructor(pet, observer) {
        this.name = pet.name;
        this.price = pet.price;
        this.quantity = pet.quantity;
        this.age = pet.age;
        this.weight = pet.weight;
        this.color = pet.color;
        this.lifetime = pet.lifetime;
        this.rapacity = pet.rapacity;
        this.type = pet.type;
        this.id = pet.id;
        this.gender = pet.gender;
        this.url = pet.url;
        this.observer = observer;

        this.init();
    }

    init() {
        this.lang = 'en';
        this.observer.subscribe(this.onChangeLanguage.bind(this));
    }

    onChangeLanguage(lang) {
        this.lang = lang;
    }

    getInfo() {
        return `type: ${this.type}, name: ${this.name}, `
    }

    getAdditionalInfo() {
        // return `${translations.color[this.lang]}: ${translations[this.color][this.lang]},
         return `${translations.color[this.lang]}: ${this.color},
        ${translations.price[this.lang]}: ${this.price} hrn,
         ${translations.quantity[this.lang]}: ${this.quantity},
          ${translations.age[this.lang]}: ${this.age} year,
         ${translations.gender[this.lang]}: ${this.gender},
        
         ${translations.rapacity[this.lang]}: ${this.rapacity}`
    }
}

export { Pet };
