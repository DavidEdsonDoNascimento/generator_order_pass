class ConfigurationOrderPass
{
    constructor(private _type_generator: number, private _hrs_to_reset: number, private _range_num_min: number, private _range_num_max: number)
    {

    }

    typeGenerator() : number
    {
        return this._type_generator;
    }

    hrsToReset() : number
    {
        return this._hrs_to_reset;
    }

    rangeNumMin() : number
    {
        return this._range_num_min;
    }

    rangeNumMax() : number
    {
        return this._range_num_max;
    }
}