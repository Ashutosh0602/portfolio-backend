import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NestExpressApplication } from '@nestjs/platform-express';
import { ValidationPipe } from '@nestjs/common';
import * as dotenv from 'dotenv';
import helmet from 'helmet';
const hpp = require('hpp');
const xss = require("xss-clean");

async function bootstrap() {
  dotenv.config();

  const app = await NestFactory.create<NestExpressApplication>(AppModule, {cors:true});

  app.useGlobalPipes(new ValidationPipe());
  app.use(helmet());
  app.use(hpp());
  app.use(xss())
  // app.use(csurf());

  await app.listen(3000);
}
bootstrap();
