import './index.html';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'node-snackbar/dist/snackbar.css';
import DUMMY_PRODUCTS from '../test/dummies/products.dummy.json';
import Snackbar from 'node-snackbar';
import { Cart } from './components/cart';
import { Product } from './components/product';

function renderCart() {
    const $toolbar = document.querySelector('.toolbar');
    const c = new Cart();
    c.render($toolbar);
    return c;
}

function renderProduct(cart, product) {
    const $products = document.querySelector('.products');
    const p = new Product();
    p.model = product;
    p.render($products);
    p.onClickAdd(async () => {
        try {
            await cart.addProduct(p);
            console.log('product added to cart', p);
            Snackbar.show({ text: 'Product was added to cart' });
        } catch (e) {
            console.warn('product NOT added to cart');
            Snackbar.show({ text: 'Product was NOT added to cart' });
        }
    });
}

function renderProductList(cart) {
    const products = DUMMY_PRODUCTS;
    products.forEach(product => {
        console.log(product);
        renderProduct(cart, product);
    });
}

function main() {
    const cart = renderCart();
    renderProductList(cart);
}

main();
