import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { NATS_SERVICE, envs } from 'src/config';
import { Logger } from '@nestjs/common';

@Module({
    imports: [
        ClientsModule.register([
            {
                name: NATS_SERVICE,
                transport: Transport.NATS,
                options: {
                    servers: envs.natsServers,
                }
            },

        ]),
    ],
    exports: [
        ClientsModule.register([
            {
                name: NATS_SERVICE,
                transport: Transport.NATS,
                options: {
                    servers: envs.natsServers,
                }
            },

        ]),
    ]
})
export class NatsModule { }
const logger = new Logger('NatsModule');
logger.log(`NATS configured with servers: ${envs.natsServers}`);