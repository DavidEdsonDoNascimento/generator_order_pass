class ConfigurationOrderPass
{
    constructor(private _type_generator: Number, private _hrs_to_reset: Number, private _range_num_min: Number, private _range_num_max: Number)
    {

    }

    typeGenerator() : Number
    {
        return this._type_generator;
    }

    hrsToReset() : Number
    {
        return this._hrs_to_reset;
    }

    rangeNumMin() : Number
    {
        return this._range_num_min;
    }

    rangeNumMax() : Number
    {
        return this._range_num_max;
    }
}