import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { MicroserviceOptions, Transport } from "@nestjs/microservices";

async function bootstrap() {
  // 一个微服务，通信端口在 8888，用 TCP 方式通信
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    AppModule,
    {
      transport: Transport.TCP,
      options: {
        port: 8888
      }
    }
    );
  app.listen()
}
bootstrap();
