class OrderPassController {
    constructor(configs) {
        this._configuration = configs;
        this._serviceOrderPass = new ServiceOrderPass();
    }
    getNextOrderPass() {
        //usar as configurações para definir a senha que será gerada
        //if(this._configuration.typeGenerator() == 1)
        return "criando gerador de senhas";
    }
}
