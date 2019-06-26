class PetView {
    constructor(petModel, parentElement) {
        this.petModel = petModel;
        this.parentElement = parentElement;

        this.init();
    }

    init() {
        this.el = document.createElement('div');
        this.el.classList.add('card');
    }

    showInfo(str) {
        return str.split(',').reduce((acc, el) => {
            acc += `<div>${el}</div>`;
            return acc;
        }, '');

    }

    update() {
        const info = this.showInfo(this.petModel.getInfo());
        const additionalInfo = this.showInfo(this.petModel.getAdditionalInfo());
        const addEspInfo = this.showInfo(this.petModel.getSpacialInfo());

        this.el.innerHTML = `<div ><img src=${this.petModel.url} class="img"></div>
            <h5>${info}</h5>
            <div>${additionalInfo}</div>
            <div>${addEspInfo}</div>`
    }

    render() {
        this.update();

        this.parentElement.appendChild(this.el);
    }
}

export {PetView};