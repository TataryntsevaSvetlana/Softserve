import { PetView } from "./pet-view.js";

class PetListView {
    constructor(petsModels, observer) {
        this.petsModels = petsModels;
        this.observer = observer;

        this.init();
    }

    init() {
        this.observer.subscribe(this.update.bind(this));
        this.el = document.querySelector('#cards');
        this.petViews = this.petsModels.map(petModel => new PetView(petModel, this.el));
    }

    update() {
        this.petViews.forEach(petViews => petViews.update());
    }

    render() {
        this.petViews.forEach(petViews => petViews.render());
    }
}

export { PetListView };