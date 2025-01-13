import { ProductModel } from "./ProductModel.js";
import { ProductView } from "./ProductView.js";
import { eventBus } from "https://6784a8458590f7a8b7ff8cb8--courageous-tulumba-4729b7.netlify.app/eventBus.js";

export class ProductController {
    constructor() {
        this.model = new ProductModel();
        this.view = new ProductView();
    }

    async init() {
        const products = await this.model.fetchProducts();
        this.view.render(products);

        document.getElementById("product-listing").addEventListener("click", (e) => {
            if (e.target.tagName === "BUTTON") {
                const productId = e.target.dataset.id;
                eventBus.emit("add-to-cart", productId);
            }
        });
    }
}
