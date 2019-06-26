import { Observer } from './helpers/index.js';
import { petFactory } from './models/index.js';
import { Pet } from "./models/index.js";
import { PetListView } from './views/pet-list-view.js';
import { TranslatorDropDownView } from "./views/translation-dropdown-view.js";

class Controller {
    init() {
        const changeLangObserver = new Observer();

        const fetchedData = Pet.fetchData();
        const petsModels = fetchedData.map(pet => petFactory(pet, changeLangObserver));
        const petListView = new PetListView(petsModels, changeLangObserver);
        petListView.render();

        const translatorDropDownView = new TranslatorDropDownView();
        translatorDropDownView.render();

        translatorDropDownView.el
            .addEventListener('change', (e) => {
                changeLangObserver.triggerEvent(e.target.value);
            });
    }
}
const controller = new Controller();

document.addEventListener('DOMContentLoaded', controller.init);


// var PenguinController = function PenguinController(penguinView, penguinModel) {
//     this.penguinView = penguinView;
//     this.penguinModel = penguinModel;
// };