import { CreateProductDto, UpdateProductDto } from "../dto/product.dto";
import { Product } from "./product.model";

export interface ProductService {
    getAll(): Product[] | Promise<Product[]>;
    update(idSearch: Product['id'], changes: UpdateProductDto): Product | Promise<Product>;
    create(dto: CreateProductDto): Product | Promise<Product>;
    findOne(idSearch: Product['id']): Product | undefined | Promise<Product | undefined>;
}
