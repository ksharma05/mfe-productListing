import { API } from "https://micro99.netlify.app/api.js";
export class ProductModel {
    async fetchProducts() {
        const products = await API.fetchProducts();
        return products;
    }
}
