import { Module } from '@nestjs/common';
import { NatsModule } from 'src/nats/nats.module';
import { UsersController } from './users.controller';

@Module({
  controllers: [UsersController],
  imports: [NatsModule],
})
export class UsersModule { }
