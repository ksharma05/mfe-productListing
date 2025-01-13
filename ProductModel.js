import { API } from "https://6784a8458590f7a8b7ff8cb8--courageous-tulumba-4729b7.netlify.app/api.js";
export class ProductModel {
    async fetchProducts() {
        const products = await API.fetchProducts();
        return products;
    }
}
