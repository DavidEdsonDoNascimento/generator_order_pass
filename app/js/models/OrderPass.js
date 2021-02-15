class OrderPass {
    constructor(_pass, _date) {
        this._pass = _pass;
        this._date = _date;
    }
    pass() {
        return this._pass;
    }
    date() {
        return `${this._date.getDay()}/${this._date.getMonth()}/${this._date.getFullYear()} ${this._date.getHours()}:${this._date.getMinutes()}:${this._date.getSeconds()}`;
    }
}
