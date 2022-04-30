import faker from '@faker-js/faker';

import { Product } from '../models/product.model';
import { CreateProductDto, UpdateProductDto } from '../dto/product.dto';
import { ProductService } from '../models/product-service.model';

export class ProductMemoryService implements ProductService {
    #products: Product[] = [];

    constructor () {
        this.add = this.add.bind(this);
    }

    create (data: CreateProductDto): Product {
        const { add } = this;
        const newProduct = {
            ...data,
            id: faker.datatype.number(),
            category: {
                id: data.categoryId,
                name: faker.commerce.department(),
                image: faker.image.imageUrl(),
            },
        };

        return add(newProduct);
    }

    add (product: Product) {
        this.#products.push(product);
        return product;
    }

    update (idSearch: Product['id'], changes: UpdateProductDto): Product {
        const index = this.#products.findIndex(({id}) => id === idSearch);
        const prevData = this.#products[index];
        this.#products[index] = {
            ...prevData,
            ...changes,
        };
        return this.#products[index];
    }

    findOne (idSearch: Product['id']) {
        const found = this.#products.find(({id}) => id === idSearch);
        return found;
    }

    getAll () {
        return this.#products;
    }
}

export const products: Product[] = [];
