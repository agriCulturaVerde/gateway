import { Module } from '@nestjs/common';
import { NatsModule } from 'src/nats/nats.module';
import { OrdersController } from './orders.controller';

@Module({
  controllers: [OrdersController],
  imports: [NatsModule],
})
export class OrdersModule { }
