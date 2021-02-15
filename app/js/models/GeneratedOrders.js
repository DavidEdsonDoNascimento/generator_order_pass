class GeneratedOrders {
    add(order_pass) {
        GeneratedOrders._orders.push(order_pass);
    }
    list() {
        return GeneratedOrders._orders;
    }
    lastQueue() {
        if (this.list().length <= 0)
            return;
        return this.list()[this.list().length - 1];
    }
}
GeneratedOrders._orders = [];
