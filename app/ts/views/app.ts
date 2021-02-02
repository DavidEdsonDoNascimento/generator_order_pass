
$(document).ready(function() {

    getNextOrderPass();

});

function getNextOrderPass() 
{
    $('.form').on('submit', (e: Event) => {
        
        e.preventDefault();
        
        let type_generator = parseInt($('#type_generator').val());
        let hrs_to_reset = parseInt($('#hrs_to_reset').val());
        let range_num_min = parseInt($('#range_num_min').val());
        let range_num_max = parseInt($('#range_num_max').val());

        let configs = new ConfigurationOrderPass(type_generator, hrs_to_reset, range_num_min, range_num_max);
        let controller = new OrderPassController(configs);

        controller.getNextOrderPass.bind(controller);
        //let response = confirm('Bom dia!\nDeseja gerar uma senha com essas configurações?');
        //if(response)
        //    controller.getNextOrderPass();
        
    });

}
