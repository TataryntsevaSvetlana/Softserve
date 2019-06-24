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
        this.observer = observer;

        this.init();
    }

    init() {
        this.el = document.createElement('div');
        this.el.classList.add('card');
        this.lang = 'en';
        this.observer.subscribe(this.onChangeLanguage.bind(this));
    }

    onChangeLanguage(lang) {
        this.lang = lang;
        this.updateEl();
    }

    getInfo() {
        return `Type: ${this.type}, name: ${this.name}`
    }

    getAdditionalInfo() {
        return `${translations.color[this.lang]}: ${this.color}, rapacity: ${this.rapacity}`
    }

    updateEl() {
        const info = this.getInfo();
        const additionalInfo = this.getAdditionalInfo();

        this.el.innerHTML = `
            <h5>${info}</h5>
            <h6>${additionalInfo}</h6>`
    }

    render() {
        this.updateEl();

        document.querySelector('#cards').appendChild(this.el);
    }
}