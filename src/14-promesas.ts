import axios from "axios";

(async () => {
    
    function delay (time: number) {
        const promise = new Promise<string>(resolve => {
            setTimeout(() => {
                resolve('string')
            }, time)
        });
        return promise;
    }

    async function getProducts () {
        const promise = axios.get('https://api.escuelajs.co/api/v1/products');
        return promise;
    }

    async function getProductsAsync () {
        const rta = await axios.get('https://api.escuelajs.co/api/v1/products');
        return rta;
    }

    async function getProductsFetch () {
        const promise = await fetch('https://api.escuelajs.co/api/v1/products');
        const rta = await promise.json();
        return rta;
    }

    // console.log('----'.repeat(10));
    // const rta = await delay(3000);
    // console.log(rta);

    const products = await getProducts();
    const productsV2 = await getProductsAsync();
    console.log(products.data);
    console.log(productsV2);
})()