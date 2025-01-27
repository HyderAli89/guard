import { Controller, Get } from '@nestjs/common';
import { LoggerDecorator } from 'src/decorator/logger.decorator';
@Controller('orders')
export class OrdersController {
     @Get()
     @LoggerDecorator('Orders Module')
      getOrdersData(): string {
        return 'Order data access';
      }
}
