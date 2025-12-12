import { Controller, Get, Post, Body, Patch, Param, Delete, Inject, Logger, UseGuards } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { NATS_SERVICE } from 'src/config';
import { CreateUserDto, UpdateUserDto } from './dto';
import { AuthGuard } from 'src/auth/guards/auth.guard';

@Controller('users')
export class UsersController {
  private readonly logger = new Logger(UsersController.name);
  constructor(@Inject(NATS_SERVICE) private readonly client: ClientProxy,) { }

  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    this.logger.log(`Creating user with data: ${JSON.stringify(createUserDto)}`);
    return this.client.send(
      'createUser',
      createUserDto,
    );
  }

  @Get(':email')
  findOne(@Param('email') email: string) {
    return this.client.send(
      'findUserByEmail',
      email,
    );

  }

  @UseGuards(AuthGuard)
  @Get()
  findAll() {
    return this.client.send(
      'findAllUsers', {}

    );

  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.client.send(
      'updateUser',
      { id, ...updateUserDto },
    );

  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.client.send(
      'removeUser',
      id,
    );
  }
}
