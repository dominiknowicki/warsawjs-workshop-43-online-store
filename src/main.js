import './index.html';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Cart } from './components/cart';
import { Product } from './components/product';

function renderCart() {
    const $toolbar = document.querySelector('.toolbar');
    const c = new Cart();
    c.render($toolbar);
}

function renderProduct() {
    const $products = document.querySelector('.products');
    const p = new Product();
    p.render($products);
    p.onClickAdd(() => {
        console.log('product added');
    });
}

function main() {
    renderCart();
    const products = Array.from({ length: 3 });
    products.forEach(() => {
        renderProduct();
    });
}

main();
