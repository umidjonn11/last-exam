import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { ValidationPipe } from '@nestjs/common';
import * as cookieParser from 'cookie-parser';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // app.useGlobalPipes(new ValidationPipe({ whitelist: true }));
  const builder = new DocumentBuilder()
    .setTitle('Courses-api')
    .addBearerAuth()
    .build();
  const factory = () => SwaggerModule.createDocument(app, builder);
  SwaggerModule.setup('api/docs', app, factory);
  app.enableCors({ origin: '*', credentials: true });
  app.use(cookieParser())
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();

