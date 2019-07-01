import {translations} from "../json";

class CartView {
    constructor(petCollection) {
        this.petCollection = petCollection;
        this.el =  document.querySelector('.popUpCart');

        this.init();
    }

    init() {
        this.el.addEventListener('click', (e) => {
            const id = e.target.dataset.id;

            if (e.target.classList.contains('buttonAddItem')) {
                const pet = this.petCollection.getPetById(id);

                this.addToCart(pet);
            }

            if (e.target.classList.contains('buttonRemoveItem')) {
                const pet = this.petCollection.getPetById(id);

                this.removeFromCart(pet);
            }

            if (e.target.classList.contains('buttonOrder')) {
                this.showOrderForm();
            }
        });

        document.querySelector('.wrapper').addEventListener('click', () => this.closeCart())
    }

    closeCart() {
        this.el.classList.add('hidden');
        document.querySelector('.wrapper').classList.add('hidden');
    }

    render() {
        const petsInCart = this.petCollection.getPetsInCart();
        this.el.classList.remove('hidden');
        document.querySelector('.wrapper').classList.remove('hidden');

        this.el.innerHTML = petsInCart.reduce((acc, pet) => {
            return acc + this.renderOne(pet);
        }, '') + this.renderFooter() + this.renderPlaceOrder();
    }

    renderPlaceOrder() {
        if (this.petCollection.getTotalPrice() > 0) {
            return `<button class="button buttonOrder">${translations['ORDER'][this.lang]}</button>`;
        }

        return ''
    }

    renderFooter() {
        return `
            <div class="petTotalInCart">
                <p class="textParagraph">${translations['IN CART'][this.lang]}: ${this.petCollection.getQuantityInCart()} ${translations.item[this.lang]}</p>
                <p class="textParagraph">${translations['TOTAL SUM'][this.lang]}: ${this.petCollection.getTotalPrice()} ${translations.hrn[this.lang]}</p>
            </div>
        `;
    }

    renderOne(petModel){
        let addButtonClassList = 'button buttonAddItem';

        if (petModel.quantity === 0) {
            addButtonClassList += ' buttonDisabled'
        }

        return `
            <div class="petInfoInCart">
                <img class="img imgPopUpCart" src=${petModel.url}>
                <div class="petDescriptionInCart">
                    <p class="textParagraph">${translations.type[this.lang]}: ${translations[petModel.type][this.lang]}</p>
                    <p class="textParagraph">${translations.breed[this.lang]}: ${translations[petModel.breed][this.lang]}</p>
                    <p class="textParagraph">${translations.price[this.lang]}: ${petModel.price} ${translations.hrn[this.lang]}</p>
                    <p class="textParagraph">${petModel.quantityPetsInCart} ${translations.item[this.lang]}</p>
                    <button data-id=${petModel.id} class="${addButtonClassList}">+</button>
                    <button data-id=${petModel.id} class="button buttonRemoveItem">-</button> 
                </div>
            </div>
        `;
    };
}

export { CartView };