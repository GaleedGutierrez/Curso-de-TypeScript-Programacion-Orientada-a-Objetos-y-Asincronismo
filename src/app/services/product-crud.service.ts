import { UpdateProductDto } from "../dto/product.dto";
import { Product } from "../models/product.model";
import { ProductHttpService } from "./product-http2.service";

export class ProductCRUDService {
    #URL = 'https://api.escuelajs.co/api/v1/products';
    #http = new ProductHttpService(this.#URL);

    async update (id: Product['id'], dto: UpdateProductDto) {
        // permisos
        // logica
        this.#http.otherRequests();
        return this.#http.update(id, dto);
    }
}
