import './index.html';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'node-snackbar/dist/snackbar.css';
import Snackbar from 'node-snackbar';
import { Cart } from './components/cart';
import { Product } from './components/product';
import { Products } from './services/products-service';

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
            Snackbar.show({
                text: `Product ${p.model.name} was added to cart`,
            });
        } catch (e) {
            console.warn('product NOT added to cart');
            Snackbar.show({
                text: `Product  ${p.model.name} was NOT added to cart`,
            });
        }
    });
}

async function renderProductList(cart) {
    const products = await Products.instance.fetchProducts();
    products.forEach(product => {
        console.log(product);
        renderProduct(cart, product);
    });
}

function main() {
    const cart = renderCart();
    renderProductList(cart).then(() => console.log('ProductList Ready'));
}

main();
