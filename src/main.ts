import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import {
  VERSION_NEUTRAL,
  ValidationPipe,
  VersioningType,
} from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { settings } from './settings/app.settings';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { bufferLogs: true });
  app.enableCors();
  app.useGlobalPipes(new ValidationPipe({ transform: true }));
  app.enableVersioning({
    type: VersioningType.HEADER,
    header: 'x-api-version',
    defaultVersion: VERSION_NEUTRAL,
  });

  //API Documentation
  const appBuilder = new DocumentBuilder()
    .setTitle(settings().swagger.title)
    .setDescription(settings().swagger.description)
    .setVersion(settings().swagger.version)
    .build();

  const appDocument = SwaggerModule.createDocument(app, appBuilder);
  SwaggerModule.setup('api/docs', app, appDocument);

  await app.listen(3000);
}
bootstrap();
