import { Module } from '@nestjs/common';
import { NatsModule } from 'src/nats/nats.module';
import { UsersController } from './users.controller';
import { AuthModule } from 'src/auth/auth.module';

@Module({
  controllers: [UsersController],
  imports: [NatsModule, AuthModule],
})
export class UsersModule { }
