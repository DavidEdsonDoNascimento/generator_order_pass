

class OrderPassController
{
    private _configuration: ConfigurationOrderPass;
    private _orderPassView = new OrderPassView('#generated_order_pass');
    private _orders = new GeneratedOrders();

    constructor(configs: ConfigurationOrderPass)
    {
        this._configuration = configs;
        this._orderPassView.update(this._orders);
    }
    
    getNextOrderPass(event: Event): void
    {
        event.preventDefault();

        if(this._configuration.typeGenerator() == 1){
            this.getNextOrderPassSequence();
        }
        else
        {
            this.getNextOrderPassRandomic();
        }
    }

    getNextOrderPassSequence(): void
    {
        let orders = this._orders.list();

        if(orders.length > 0){
            const pass = orders.length;
            const orderPass = new OrderPass(pass, new Date());
            this._orders.add(orderPass);
            this._orderPassView.update(this._orders);
        }
        else{
            const orderPass = new OrderPass(this._configuration.rangeNumMin(), new Date());
            this._orders.add(orderPass);
            this._orderPassView.update(this._orders);
        }
    }

    getNextOrderPassRandomic(): void
    {
        let orders = this._orders.list();
        //implementar a logica
    }

    
}