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
}