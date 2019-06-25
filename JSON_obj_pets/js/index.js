import { Observer } from './helpers';
import { petFactory } from './models';
import { pets } from './json/pets.js';
import { PetListView } from './views/pet-list-view.js';
import { TranslatorDropDownView } from "./views/translation-dropdown-view.js";

class Controller {
    init() {
        const observer = new Observer();
        const petsModels = pets.map(pet => petFactory(pet, observer));
        const petListView = new PetListView(petsModels, observer);
        petListView.render();

        const translatorDropDownView = new TranslatorDropDownView(observer);
        translatorDropDownView.render();

        translatorDropDownView.el
            .addEventListener('change', (e) => {
                observer.triggerEvent(e.target.value);
            });
    }
}
const controller = new Controller();

document.addEventListener('DOMContentLoaded', controller.init);
