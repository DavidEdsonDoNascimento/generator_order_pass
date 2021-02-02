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
                    <th scope="col">Senha</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                ${model.list().map(order => {
            return `<td>${order.pass()}</td>
                        <td>${order.date()}</td>
                    </tr>`;
        })}
            </tbody>
        </table>`;
    }
}
