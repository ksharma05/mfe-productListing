export class ProductView {
    render(products) {
        const container = document.getElementById("product-listing");
        container.innerHTML = `
            <h2>Product Listing</h2>
            <ul>
                ${products.map((p) => `<li>${p.name} - $${p.price} <button data-id="${p.id}">Add to Cart</button></li>`).join("")}
            </ul>
        `;
    }
}
