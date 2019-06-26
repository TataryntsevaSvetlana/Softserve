import { translations, pets } from '../json/index.js';

class Pet {
    constructor(pet, observer) {
        this.name = pet.name;
        this.price = pet.price;
        this.quantity = pet.quantity;
        this.age = pet.age;
        this.color = pet.color;
        this.rapacity = pet.rapacity;
        this.type = pet.type;
        this.id = pet.id;
        this.gender = pet.gender;
        this.url = pet.url;
        this.observer = observer;

        this.init();
    }

    static fetchData() {
        return pets;
    }

    init() {
        this.lang = 'en';
        this.observer.subscribe(this.onChangeLanguage.bind(this));
    }

    onChangeLanguage(lang) {
        this.lang = lang;
    }

    getInfo() {
        return `${translations.type[this.lang]}: ${translations[this.type][this.lang]},
         ${translations.name[this.lang]}: ${translations[this.name][this.lang]}`
        // ${translations.price[this.lang]}: ${translations[this.price][this.lang]} hrn,
    }

    getAdditionalInfo() {

        // ${translations.quantity[this.lang]}: ${translations[this.quantity][this.lang]},
        // ${translations.age[this.lang]}: ${translations[this.age][this.lang]} year,

         return `${translations.color[this.lang]}: ${translations[this.color][this.lang]},  
         ${translations.gender[this.lang]}: ${translations[this.gender][this.lang]},       
         ${translations.rapacity[this.lang]}: ${translations[this.rapacity][this.lang]}`
    }
}

export { Pet };
