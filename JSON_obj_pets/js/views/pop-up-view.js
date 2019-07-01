import {translations} from "../json";

class PopUpView {
    constructor() {
        this.el = document.querySelector('.popUpInfo');

        this.init();
    }

    init() {
        this.el.addEventListener('click', (e) => {
            if (e.target.classList.contains('buttonAddToCart')) {
                const id = e.target.dataset.id;

                this.handleAdd(id);
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

    renderPopUp(petModel) {
        this.el.classList.remove('hidden');
        document.querySelector('.wrapper').classList.remove('hidden');

        let addButtonClassList = 'button buttonAddToCart';

        if (petModel.quantity === 0) {
            addButtonClassList += ' buttonDisabled'
        }

        this.el.innerHTML = `
            <div>
                <img src=${petModel.url} class="img imgPopUp">
            </div>
            <p class="textParagraph">${translations.type[this.lang]}: ${translations[petModel.type][this.lang]}</p>
            <p class="textParagraph">${translations.breed[this.lang]}: ${translations[petModel.breed][this.lang]}</p>
            <p class="textParagraph">${translations.age[this.lang]}: ${petModel.age} ${translations.year[this.lang]}</p>
            <p class="textParagraph">${translations.quantity[this.lang]}: ${petModel.quantity} ${translations.item[this.lang]}</p>
            <p class="textParagraph">${translations.price[this.lang]}: ${petModel.price} ${translations.hrn[this.lang]}</p>
            <p class="textParagraph">${translations.color[this.lang]}: ${translations[petModel.color][this.lang]}</p>
            <p class="textParagraph">${translations.rapacity[this.lang]}: ${translations[petModel.rapacity][this.lang]}</p>
            <p class="textParagraph">${translations.gender[this.lang]}: ${translations[petModel.gender][this.lang]}</p>
            <button data-id=${petModel.id} class="${addButtonClassList}">${translations['ADD TO CART'][this.lang]}</button>
       `;
    }
}

export { PopUpView };