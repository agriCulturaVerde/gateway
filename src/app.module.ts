import { Module } from '@nestjs/common';
import { ProductsModule } from './products/products.module';
import { OrdersModule } from './orders/orders.module';
import { NatsModule } from './nats/nats.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [ProductsModule, OrdersModule, NatsModule, UsersModule],
})
export class AppModule { }
