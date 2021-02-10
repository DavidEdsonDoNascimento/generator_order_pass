class GeneratedOrders {
    add(order_pass) {
        GeneratedOrders._orders.push(order_pass);
    }
    list() {
        return GeneratedOrders._orders;
    }
}
GeneratedOrders._orders = [];
