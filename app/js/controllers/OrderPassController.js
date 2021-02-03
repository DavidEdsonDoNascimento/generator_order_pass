class OrderPassController {
    constructor(configs) {
        this._orderPassView = new OrderPassView('#generated_order_pass');
        this._orders = new GeneratedOrders();
        this._configuration = configs;
        this._orderPassView.update(this._orders);
    }
    getNextOrderPass() {
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
            const pass = orders.length + 1;
            this._orderPass = new OrderPass(pass, new Date());
            this._orders.add(this._orderPass);
            this._orderPassView.update(this._orders);
        }
        else {
            this._orderPass = new OrderPass(this._configuration.rangeNumMin(), new Date());
            this._orders.add(this._orderPass);
            this._orderPassView.update(this._orders);
        }
    }
    getNextOrderPassRandomic() {
        let orders = this._orders.list();
        //implementar a logica
    }
}
