class OrderPassController {
    constructor(configs) {
        this._orderPassView = new OrderPassView('#generated_order_pass');
        this._orders = new GeneratedOrders();
        this._configuration = configs;
        this._orderPassView.update(this._orders);
    }
    getNextOrderPass(event) {
        event.preventDefault();
        if (this._configuration.typeGenerator() == 1) {
            this.getNextOrderPassSequence();
        }
        else {
            this.getNextOrderPassRandomic();
        }
    }
    getNextOrderPassSequence() {
        let orders = this._orders.list();
        if (orders.length > 0) {
            const pass = orders.length;
            const orderPass = new OrderPass(pass, new Date());
            this._orders.add(orderPass);
            this._orderPassView.update(this._orders);
        }
        else {
            const orderPass = new OrderPass(this._configuration.rangeNumMin(), new Date());
            this._orders.add(orderPass);
            this._orderPassView.update(this._orders);
        }
    }
    getNextOrderPassRandomic() {
        let orders = this._orders.list();
        //implementar a logica
    }
}
