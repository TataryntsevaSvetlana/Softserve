

import {PetsCollection} from './collections/petsCollection.js';

import {PetListView} from './views/petListView.js';
import {PopUpView} from './views/popUpView.js';
import {TranslatorDropDownView} from "./views/translationDropdownView.js";
import {CheckoutView} from "./views/checkoutView.js";
import {CartView} from "./views/cartView.js";
import {FilterView} from "./views/filterView.js";
// import {QuantityItemInCartView} from "./views/quantityItemInCartView.js";


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
        this.cartView.removeAllFromCart = this.removeAllFromCart.bind(this);

        const buttonCart = document.querySelector('.buttonCart');
        buttonCart.addEventListener('click', () => this.cartView.render());

        this.checkoutView = new CheckoutView(this.petsCollection);
        this.checkoutView.showOrderForm = this.showOrderForm.bind(this);
        this.checkoutView.checkout = this.checkout.bind(this);

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

        // this.quantityItemInCartView = new QuantityItemInCartView(this.petsCollection);
        // this.quantityItemInCartView.showQuantityItemInCart = this.showQuantityItemInCart.bind(this);

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

    removeAllFromCart() {
        this.petsCollection.removeAllFromCart();
        this.cartView.render();
        this.petListView.render();
    }

    handleAdd(petId) {
        const petModel = this.petsCollection.getPetById(petId);

        petModel.addToCart();
        this.petListView.render();
        this.popUpView.renderPopUp(petModel);
    }

    showOrderForm() {
        this.cartView.closeCart();
        this.checkoutView.render();
    }

    checkout() {
        this.petsCollection.checkout();
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

    // showQuantityItemInCart() {
    //     this.quantityItemInCartView.renderQuantityItemInCartView();
    // }
}


document.addEventListener('DOMContentLoaded', () => {
    const controller = new Controller();
    controller.init();
});
