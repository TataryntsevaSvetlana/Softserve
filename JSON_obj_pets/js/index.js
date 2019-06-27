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

//
// const notes = getLocalStorage();  // получаем информацио из localStorage и рендерим в главном поле, навешиваем обработчики
// notes.forEach(note => { renderNote(note) });

//
// function getLocalStorage(){
//     return JSON.parse(localStorage.getItem('notes') || '[]');
// }
// function setLocalStorage(notes){
//     return localStorage.setItem('notes', JSON.stringify(notes));
// }
//
// function handleSaveButtonClick() { // при сохранении заметки, отправляем значения заголовка и описания в localStorage, рендерим заметку в главном поле и закрываем модальное окно
//     const note = getNoteValues();
//
//     saveToStorage(note);
//     renderNote(note);
//     handleCancelModal();
// }
//
// function saveToStorage(note) {   // сохраняем значения заголовка и описания в localStorage,
//     const notes = getLocalStorage();
//
//     notes.push(note);
//     setLocalStorage(notes);
// }