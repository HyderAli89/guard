import { Controller,Get } from '@nestjs/common';
import { LoggerDecorator } from 'src/decorator/logger.decorator'; 
@Controller('products')
export class ProductsController {
    @Get()
    @LoggerDecorator('Product Module')
    getData(): string {
        return 'Product data access';
    }
}
