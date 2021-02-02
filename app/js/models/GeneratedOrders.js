class GeneratedOrders {
    constructor() {
        this._orders = [];
    }
    add(order_pass) {
        this._orders.push(order_pass);
    }
    list() {
        return this._orders;
    }
}
