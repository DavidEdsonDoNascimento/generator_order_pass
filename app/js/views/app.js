$(document).ready(function () {
    getNextOrderPass();
    $('#btn-reset').on('click', function () {
        let orders = new GeneratedOrders();
        orders.reset();
        let orderPassView = new OrderPassView('#generated_order_pass');
        orderPassView.update(this._orders);
        alert('Senhas zeradas com sucesso!');
    });
});
function getNextOrderPass() {
    $('.form').on('submit', (e) => {
        e.preventDefault();
        let type_generator = parseInt($('#type_generator').val());
        let hrs_to_reset = parseInt($('#hrs_to_reset').val());
        let range_num_min = parseInt($('#range_num_min').val());
        let range_num_max = parseInt($('#range_num_max').val());
        let configs = new ConfigurationOrderPass(type_generator, hrs_to_reset, range_num_min, range_num_max);
        let controller = new OrderPassController(configs);
        let order_generated = controller.getNextOrderPass();
        if (!order_generated)
            alert('as senhas acabaram');
        //let orders = $('.order_pass');
        //let response = confirm('Bom dia!\nDeseja gerar uma senha com essas configurações?');
        //if(response)
        //    controller.getNextOrderPass();
    });
}
