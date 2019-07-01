
import {PetListView} from './views/pet-list-view.js';
import {PetsCollection} from './collections/pets-collection.js';
import {PopUpView} from './views/pop-up-view.js';
import {TranslatorDropDownView} from "./views/translation-dropdown-view.js";
import {CheckoutView} from "./views/checkout-view.js";
import {CartView} from "./views/cart-view.js";
import {FilterView} from "./views/filter-view.js";



class Controller {
    init() {
        const initialLang = 'en';

        this.petsCollection = new PetsCollection();
        this.petsCollection.fetchData();

        this.petListView = new PetListView(this.petsCollection);
        this.petListView.showPopUp = this.showPopUp.bind(this);  // передаем функцию showPopUp, теперь мы ее можем вызывать из petListView
        this.petListView.lang = initialLang;
        this.petListView.render();

        this.popUpView = new PopUpView();
        this.popUpView.handleAdd = this.handleAdd.bind(this);

        this.cartView = new CartView(this.petsCollection);
        this.cartView.addToCart = this.addToCart.bind(this);
        this.cartView.removeFromCart = this.removeFromCart.bind(this);
        this.cartView.showOrderForm = this.showOrderForm.bind(this);

        this.checkoutView = new CheckoutView(this.petsCollection);
        this.checkoutView.showOrderForm = this.showOrderForm.bind(this);
        this.checkoutView.placeOrder = this.placeOrder.bind(this);

        const buttonCart = document.querySelector('.buttonCart');
        buttonCart.addEventListener('click', () => this.cartView.render());

        this.translatorDropDownView = new TranslatorDropDownView();
        this.translatorDropDownView.changeLang = this.changeLang.bind(this);
        this.translatorDropDownView.render();

        this.filterView = new FilterView();
        this.filterView.lang = initialLang;
        this.filterView.render();
        this.filterView.filterCollection = this.filterCollection.bind(this);


        this.checkoutView.lang = initialLang;
        this.cartView.lang  = initialLang;
        this.popUpView.lang = initialLang;

    }

    showPopUp(petModel) {
        this.popUpView.renderPopUp(petModel);
    }

    addToCart(petModel) {
        petModel.addToCart();
        this.cartView.render();
    }

    removeFromCart(petModel) {
        petModel.removeFromCart();
        this.cartView.render(petModel);
    }

    handleAdd(petId) {
        const petModel = this.petsCollection.getPetById(petId);

        petModel.addToCart();
        this.popUpView.renderPopUp(petModel);
    }

    showOrderForm() {
        this.cartView.closeCart();
        this.checkoutView.render();
    }

    placeOrder() {
        this.petsCollection.placeOrder();
        this.petListView.render();
    }

    filterCollection(petTypes) {
        this.petsCollection.filterPets(petTypes);
        this.petListView.render();
    }

    changeLang(lang) {
        this.petListView.lang = lang;
        this.checkoutView.lang = lang;
        this.cartView.lang  = lang;
        this.popUpView.lang = lang;
        this.filterView.lang = lang;

        this.petListView.render();
        this.filterView.render();
    }
}


document.addEventListener('DOMContentLoaded', () => { // при загрузке html документа вызывается сздание контроллера и его инициализация
    const controller = new Controller();
    controller.init();
});
