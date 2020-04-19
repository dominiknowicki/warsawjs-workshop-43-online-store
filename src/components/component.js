export class Component {
    static parse(template) {
        const parser = new DOMParser();
        const doc = parser.parseFromString(template, 'text/html');
        return doc.body.firstElementChild;
    }

    constructor() {
        this.model = null;
    }

    get template() {
        return '<p>test</p>';
    }

    render($target) {
        const $el = Component.parse(this.template);
        $target.append($el);
        this.$el = $el;
    }

    update() {
        const $el = Component.parse(this.template);
        this.$el.parentNode.replaceChild($el, this.$el);
        this.$el = $el;
    }

    onClickAdd(cb) {
        this.$el.querySelector('button').addEventListener('click', cb);
    }
}
