import { productsUrl } from '../config';

class _ProductsService {
    fetchProducts() {
        return window.fetch(productsUrl).then(response => {
            return response.json();
        });
    }
}

export const ProductsService = {
    instance: new _ProductsService(),
};
