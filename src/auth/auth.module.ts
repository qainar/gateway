import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { ClientsModule, Transport } from '@nestjs/microservices';

@Module({
  controllers: [AuthController],
  providers: [AuthService],
  imports: [
    ClientsModule.register([
      {
        name: 'AUTH_SERVICE',
        transport: Transport.RMQ,
        options: {
          urls: ['amqp://qainar:qainar@localhost:5672'],
          queue: 'auth_queue',
          queueOptions: {
            durable: false,
          },
        }
      }
    ])
  ]
})
export class AuthModule {}
