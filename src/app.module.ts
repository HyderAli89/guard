import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { ProductsModule } from './products/products.module';
import { CmsModule } from './cms/cms.module';
import { OrdersModule } from './orders/orders.module';
import { APP_GUARD, APP_INTERCEPTOR } from '@nestjs/core';
import { TenantGuard } from './guard/tenant.guard';
import { RoleGuard } from './guard/role.guard';
import { AppService } from './app.service';
import { LoggerInterceptor } from './interceptor/logger.interceptor';


@Module({
  imports: [ProductsModule, CmsModule, OrdersModule],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide:APP_GUARD,
      useClass:TenantGuard
    },
    {
      provide:APP_GUARD,
      useClass: RoleGuard,
    },
    {
      provide: APP_INTERCEPTOR,
      useClass: LoggerInterceptor
    }
  ],
})
export class AppModule {}
