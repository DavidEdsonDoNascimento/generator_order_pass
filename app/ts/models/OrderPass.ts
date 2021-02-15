class OrderPass
{
    constructor(private _pass: number, private _date: Date)
    {

    }

    pass(): number
    {
        return this._pass;
    }

    date() : string
    {
        return `${this._date.getDay()}/${this._date.getMonth()}/${this._date.getFullYear()} ${this._date.getHours()}:${this._date.getMinutes()}:${this._date.getSeconds()}` ;
    }
}