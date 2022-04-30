import axios from 'axios';
import { UpdateProductDto, CreateProductDto } from '../dto/product.dto';
import { ProductService } from '../models/product-service.model';
import { Product } from '../models/product.model';

export class ProductHttpService implements ProductService {
    #URL = 'https://api.escuelajs.co/api/v1/products';

    async getAll () {
        const { data } = await axios.get<Product[]>(this.#URL);
        return data;
    }

    async update (idSearch: Product['id'], changes: UpdateProductDto) {
        const { data } = await axios.put(`${this.#URL}/${idSearch}`, changes);
        return data;
    }

    async create (dto: CreateProductDto) {
        const { data } = await axios.post(this.#URL, dto);
        return data;
    }

    async findOne (idSearch: Product['id']) {
        const { data } = await axios.get(`${this.#URL}/${idSearch}`);
        return data;
    }
}
