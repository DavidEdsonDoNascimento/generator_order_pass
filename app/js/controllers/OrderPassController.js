class OrderPassController {
    constructor(configs) {
        this._orderPassView = new OrderPassView('#generated_order_pass');
        this._orders = new GeneratedOrders();
        this._configuration = configs;
        this._orderPassView.update(this._orders);
    }
    getNextOrderPass() {
        return (this._configuration.typeGenerator() == 1) ? this.getNextOrderPassSequence() : this.getNextOrderPassRandomic();
    }
    getNextOrderPassSequence() {
        let orders = this._orders.list();
        const pass = (orders.length > 0) ? this._orders.lastQueue().pass() + 1 : this._configuration.rangeNumMin();
        this._orderPass = new OrderPass(pass, new Date());
        this._orders.add(this._orderPass);
        this._orderPassView.update(this._orders);
    }
    getNextOrderPassRandomic() {
        let orders = this._orders.list();
        //implementar a logica
    }
}
