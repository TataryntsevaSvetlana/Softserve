class Observer {
    constructor() {
        this.observers = [];
    }

    subscribe(fn) {
        this.observers.push(fn);
    }

    triggerEvent(data) {
        this.observers.forEach(subscriber => subscriber(data));
    }
}

export { Observer };