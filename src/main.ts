import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { INestApplication, ValidationPipe } from '@nestjs/common';
import * as dotenv from 'dotenv';
dotenv.config();

function getValidationPipe() {
  return new ValidationPipe({
    whitelist: true,
    forbidNonWhitelisted: true,
    transform: true,
    transformOptions: {
      enableImplicitConversion: true,
    },
  });
}

async function setupApp(app: INestApplication) {
  app.useGlobalPipes(getValidationPipe());
  app.setGlobalPrefix(process.env.GLOBAL_PREFIX);
}
async function createApp() {
  return await NestFactory.create(AppModule);
}

async function launchApp(app: INestApplication) {
  await app.listen(process.env.PORT);
}

async function initApp() {
  const app = await createApp();
  await setupApp(app);
  await launchApp(app);
}

initApp();
