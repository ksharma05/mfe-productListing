import { API } from "../../shared/api.js";
export class ProductModel {
    async fetchProducts() {
        const products = await API.fetchProducts();
        return products;
    }
}
