import { Body, Controller, Get, Inject, Logger, Param, Post, UseGuards } from '@nestjs/common';
import { ClientProxy, MessagePattern, Payload } from '@nestjs/microservices';
import { NATS_SERVICE } from 'src/config';
import { CreateUserDto } from 'src/users/dto';
import { LoginAuthDto } from './dto/login-auth.dto';
import { User, Token } from './decorators';
import { AuthGuard } from './guards/auth.guard';
import { JwtPayloadDto } from './dto';

@Controller('auth')
export class AuthController {
  private readonly logger = new Logger(AuthController.name);
  constructor(@Inject(NATS_SERVICE) private readonly client: ClientProxy,) { }

  @Post('login')
  loginAuth(@Body() loginAuthDto: LoginAuthDto) {
    this.logger.log(`Logging in user with data: ${JSON.stringify(loginAuthDto)}`);
    return this.client.send(
      'loginAuth',
      loginAuthDto,
    );
  }

  @Post('register')
  registerAuth(@Body() createUserDto: CreateUserDto) {
    return this.client.send(
      'registerAuth',
      createUserDto,
    );
  }

  @UseGuards(AuthGuard)
  @Get('verify')
  verifyTokenAuth(@User() user: JwtPayloadDto, @Token() token: string) {
    return { user, token }
    // return this.client.send(
    //   'verifyTokenAuth',
    //   token,
    // );
  }
}
