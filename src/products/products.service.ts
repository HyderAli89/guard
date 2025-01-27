import { Injectable } from '@nestjs/common';

@Injectable()
export class ProductsService {
    getProductData(): string{
        return 'Product data'
    }
}
