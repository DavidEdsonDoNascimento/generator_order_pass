class OrderPassView {
    constructor(selector) {
        this._element = $(selector);
    }
    update(model) {
        this._element.html(this.template(model));
    }
    template(model) {
        return `
        <table class="table table-striped table-bordered">
            <thead>
                <tr>
                    <th scope="col">Senha</th>
                    <th scope="col">Gerada em</th>
                </tr>
            </thead>
            <tbody>
            ${model.list().map(order => {
            return `<tr class="order_pass">
                            <td id="pass">${order.pass()}</td>
                            <td id="generated_date">${order.date()}</td>
                        </tr>`;
        })
            .join('')}
            </tbody>
        </table>`;
    }
}
