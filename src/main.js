import './index.html';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Cart } from './components/cart';
import { Product } from './components/product';

function renderCart() {
    const $toolbar = document.querySelector('.toolbar');
    const c = new Cart();
    c.render($toolbar);
    return c;
}

function renderProduct(cart) {
    const $products = document.querySelector('.products');
    const p = new Product();
    p.render($products);
    p.onClickAdd(async () => {
        try {
            await cart.addProduct(p);
            console.log('product added to cart', p);
        } catch (e) {
            console.warn('product NOT added to cart');
        }
    });
}

function renderProductList(cart) {
    const products = Array.from({ length: 3 });
    products.forEach(() => {
        renderProduct(cart);
    });
}

function main() {
    const cart = renderCart();
    renderProductList(cart);
}

main();
