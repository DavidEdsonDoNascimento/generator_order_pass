class OrderPass
{
    constructor(private _pass: Number, private _date: Date)
    {

    }

    pass(): Number
    {
        return this._pass;
    }

    date() : Date
    {
        return this._date;
    }
}