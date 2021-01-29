

class OrderPassController
{
    private _configuration: ConfigurationOrderPass;

    constructor(configs: ConfigurationOrderPass)
    {
        this._configuration = configs;
    }
    
    getNextOrderPass(): string
    {
        return 'nova senha';
    }
}