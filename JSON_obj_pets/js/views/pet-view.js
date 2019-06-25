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
            <div ><img src=${this.petModel.url} class="img"></div>
            <h5>${info}</h5>
            <p>${additionalInfo}</p>`
    }

    render() {
        this.update();

        this.parentElement.appendChild(this.el);
    }
}

export { PetView };