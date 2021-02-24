class GeneratedOrders
{
    private static _orders: OrderPass[] = [];    

    add(order_pass: OrderPass) : void
    {
        GeneratedOrders._orders.push(order_pass);
    }

    list() : OrderPass[]
    {
        return GeneratedOrders._orders;
    }
    
    reset() : void
    {
        GeneratedOrders._orders = [];
    }
    
    lastQueue() : OrderPass
    {
        if(this.list().length <= 0)
        return;
        return this.list()[this.list().length - 1];
    }

}