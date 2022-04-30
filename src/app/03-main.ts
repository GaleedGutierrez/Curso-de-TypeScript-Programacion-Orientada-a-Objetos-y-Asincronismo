import { ProductHttpService } from "./services/product-http.service";

(async () => {
    const productService = ProductHttpService.createProductHttpService();

    try {
        // console.log('-'.repeat(20));

        const products = await productService.getAll()
        // console.log(products.length);
        // console.log(products.map(({price}) => price));

        const productId = products[0].id;

        await productService.update(productId, {
            price: 1_000_000_000,
            title: 'New title',
            description: 'New description'
        });

        const product = await productService.findOne(productId);
        console.log({product});
    } catch (error) {
        console.log(error);
    }
})();
