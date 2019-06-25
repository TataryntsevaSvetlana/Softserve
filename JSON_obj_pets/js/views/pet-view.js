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

    update() {
        const info = this.petModel.getInfo();
        const additionalInfo = this.petModel.getAdditionalInfo();

        this.el.innerHTML = `
            <h5>${info}</h5>
            <h6>${additionalInfo}</h6>`
    }

    render() {
        this.update();

        this.parentElement.appendChild(this.el);
    }
}

export { PetView };