function init() {
    const observer = new Observer();
    const pets = petsJSON.map(pet => petFactory(pet, observer));
    pets.forEach(pet => pet.render());

    const translatorDropDown = new TranslatorDropDown(observer);
    translatorDropDown.render();
}

document.addEventListener('DOMContentLoaded', init);