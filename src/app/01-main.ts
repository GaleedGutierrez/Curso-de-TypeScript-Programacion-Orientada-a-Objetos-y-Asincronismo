import axios from 'axios';
import { Product } from './models/product.model';

const URL = 'https://api.escuelajs.co/api/v1/products';

// let anyVar: any = 12;
// let boolVar: boolean = anyVar;

(async () => {
    
    // async function getProductsAsync (): Promise<Product[]> {
    //     const { data } = await axios.get(URL);
    //     return data;
    // }

    // async function getProductsAsync () {
    //     const { data } = await axios.get<Product[]>(URL);
    //     return data;
    // }

    async function getProductsAsync () {
        const rta = await axios.get(URL);
        const data = rta.data as Product[];
        return data;
    }

    const products = await getProductsAsync();
    console.log(products.map(({id, title}) => `${id} - ${title}`));
})()