import { ProductModel } from "./ProductModel.js";
import { ProductView } from "./ProductView.js";
import { eventBus } from "../../shared/eventBus.js";

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
