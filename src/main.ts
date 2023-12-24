import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import {SwaggerConfig} from './swagger.config'

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const swaggerConfig = new SwaggerConfig()
  swaggerConfig.setupConfig(app)
  await app.listen(3000);
}
bootstrap();
