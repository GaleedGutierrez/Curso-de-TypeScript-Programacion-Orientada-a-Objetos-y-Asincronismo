import axios from 'axios';
import { Category } from "./../models/category.model";
import { Product } from "./../models/product.model";

export class BaseHttpService<TypeClass> {
   // data: TypeClass[] = [];
    #URL: string = '';

    constructor (
        URL: string
    ) {
        this.#URL = URL;
    }

    async getAll (): Promise<TypeClass[]> {
        const { data } = await axios.get<TypeClass[]>(this.#URL);
        return data;
    }
}

// const service = new BaseHttpService<string>();
// service.getAll();
// const service1 = new BaseHttpService<Category>();
// service1.getAll();

(async () => {
    const URL1 = 'https://api.escuelajs.co/api/v1/products';
    const URL2 = 'https://api.escuelajs.co/api/v1/categories';
    const productService = new BaseHttpService<Product>(URL1);
    const rta = await productService.getAll();
    const categoryService = new BaseHttpService<Category>(URL2);
    const rta2 = await categoryService.getAll();
    console.log(rta.length, rta2.length)
})();

