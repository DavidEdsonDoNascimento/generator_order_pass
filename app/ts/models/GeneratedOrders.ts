class GeneratedOrders
{
    private _orders: OrderPass[] = [];

    add(order_pass: OrderPass) : void
    {
        this._orders.push(order_pass);
    }

    list() : OrderPass[]
    {
        return this._orders;
    }
}