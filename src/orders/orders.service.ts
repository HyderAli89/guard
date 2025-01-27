import { Injectable } from '@nestjs/common';

@Injectable()
export class OrdersService {
    getOrdersData(): string{
        return 'Order data'
    }
}
