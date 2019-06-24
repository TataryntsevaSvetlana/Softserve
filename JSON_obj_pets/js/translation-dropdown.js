class TranslatorDropDown {
    constructor(observer) {
        this.el = document.querySelector('.translation');
        this.observer = observer;

        this.init();
    }

    init() {
        this.el.addEventListener('change', this.handleChange.bind(this), false);
    }

    render() {
        this.el.innerHTML = `
            <select>
                <option value="en">en</option>
                <option value="ru">ru</option>
                <option value="ua">ua</option>
            </select>
        `
    }

    handleChange(e) {
        this.observer.triggerEvent(e.target.value);
    }
}