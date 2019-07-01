import {translations} from "../json";

class CheckoutView {
    constructor(petsCollection) {
        this.el = document.querySelector('.popUpCheckout');
        this.petsCollection = petsCollection;

        this.init();
    }

    init() {
        this.el.addEventListener('click', (e) => {
            if (e.target.classList.contains('buttonCheckout')) {
                e.preventDefault();
                this.placeOrder();
                this.closePopUp();
            }
        });

        document.querySelector('.wrapper').addEventListener('click', () => {
            this.closePopUp();
        })
    }

    closePopUp() {
        this.el.classList.add('hidden');
        document.querySelector('.wrapper').classList.add('hidden');
    }

    render() {
        this.el.classList.remove('hidden');
        document.querySelector('.wrapper').classList.remove('hidden');

        this.el.innerHTML = `
            <form class="orderForm">
                <div class="row">
                    <div>
                        <label for="email">${translations.Email[this.lang]}:</label> 
                        <input class="u-full-width" type="email" placeholder="test@mailbox.com" id="email">                    
                    </div>
                </div>
                <div class="row">
                    <div>
                        <label for="name">${translations.Name[this.lang]}:</label>
                        <input class="u-full-width" type="text" placeholder="test@mailbox.com" id="name">
                    </div>
                </div>
                <div class="row">
                    <div>
                        <label for="phone">${translations.Phone[this.lang]}:</label>
                        <input class="u-full-width" type="phone" placeholder="test@mailbox.com" id="phone">
                    </div>
                </div>
                <div class="textParagraph">${translations.SUM[this.lang]}: ${this.petsCollection.getTotalPrice()} ${translations.hrn[this.lang]}</div>
                <button class="button buttonCheckout" type="submit" value="Submit">${translations.CHECKOUT[this.lang]}</button>
            </form>
       `;
    }
}

export { CheckoutView };