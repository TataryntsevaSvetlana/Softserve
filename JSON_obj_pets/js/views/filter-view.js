import {translations} from "../json";

class FilterView {
    constructor() {
        this.el = document.querySelector('.filter');
        this.filters = ['cat', 'dog', 'fish', 'bird'];

        this.init();
    }

    init() {
        this.el.addEventListener('click', (e) => {
            if (e.target.classList.contains('cat')) {
                this.handleFilter(e, 'cat');
            }
            if (e.target.classList.contains('dog')) {
                this.handleFilter(e, 'dog');
            }
            if (e.target.classList.contains('fish')) {
                this.handleFilter(e, 'fish');
            }
            if (e.target.classList.contains('bird')) {
                this.handleFilter(e, 'bird');
            }
        });
    }

    handleFilter(e, type) {
        if (!e.target.checked) {
            this.filters = this.filters.filter(i => i !== type);
        } else {
            this.filters.push(type);
        }
        this.filterCollection(this.filters);
    }

    render() {
        this.el.innerHTML = `
            <label>
                cat
                <input checked class="cat" type="checkbox" name="cat">
            </label>
                <label>
                dog
                <input checked class="dog" type="checkbox" name="dog">
            </label>
                <label>
                 fish
                <input checked class="fish" type="checkbox" name="fish">
            </label>
                <label>
                 bird
                <input checked class="bird" type="checkbox" name="bird">
            </label>
        `;

        document.querySelector('.wrapper').classList.add('hidden');
    }

}

export { FilterView };