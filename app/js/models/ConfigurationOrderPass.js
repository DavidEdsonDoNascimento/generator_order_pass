class ConfigurationOrderPass {
    constructor(_type_generator, _hrs_to_reset, _range_num_min, _range_num_max) {
        this._type_generator = _type_generator;
        this._hrs_to_reset = _hrs_to_reset;
        this._range_num_min = _range_num_min;
        this._range_num_max = _range_num_max;
    }
    typeGenerator() {
        return this._type_generator;
    }
    hrsToReset() {
        return this._hrs_to_reset;
    }
    rangeNumMin() {
        return this._range_num_min;
    }
    rangeNumMax() {
        return this._range_num_max;
    }
}
