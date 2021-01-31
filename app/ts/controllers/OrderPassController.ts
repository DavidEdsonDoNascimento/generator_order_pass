

class OrderPassController
{
    private _configuration: ConfigurationOrderPass;
    private _serviceOrderPass: ServiceOrderPass;

    constructor(configs: ConfigurationOrderPass)
    {
        this._configuration = configs;
        this._serviceOrderPass = new ServiceOrderPass();
    }
    
    getNextOrderPass(): string
    {
        //usar as configurações para definir a senha que será gerada
        
        //if(this._configuration.typeGenerator() == 1)
        return "criando gerador de senhas";
    }
}