

class OrderPassController
{
    private _configuration: ConfigurationOrderPass;
    private _orderPassView = new OrderPassView('#generated_order_pass');
    private _orders = new GeneratedOrders();
    private _orderPass: OrderPass;

    constructor(configs: ConfigurationOrderPass)
    {
        this._configuration = configs;
        this._orderPassView.update(this._orders);
    }
    
    getNextOrderPass(): boolean
    {        
        return (this._configuration.typeGenerator() == 1) ? this.getNextOrderPassSequence() : this.getNextOrderPassRandomic();
    }

    getNextOrderPassSequence(): boolean
    {
        let orders = this._orders.list();

        let diff = this._configuration.differenceBetweenPossibilitiesAndQueue(orders);

        if(diff.length <= 0) return false;

        const pass = (orders.length > 0)? diff[0] : this._configuration.rangeNumMin();
            
        this._orderPass = new OrderPass(pass, new Date());
        this._orders.add(this._orderPass);
        this._orderPassView.update(this._orders);
        return true;
    }

    getNextOrderPassRandomic(): boolean
    {
        let orders = this._orders.list();
        
        let diff = this._configuration.differenceBetweenPossibilitiesAndQueue(orders);
        
        if(diff.length <= 0) return false;

        let pass = diff[Math.floor(Math.random() * diff.length)];

        this._orderPass = new OrderPass(pass, new Date());
        this._orders.add(this._orderPass);
        this._orderPassView.update(this._orders);
        return true;
    }

    
}