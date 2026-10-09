import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module.js';
import { NotFoundExceptionFilter } from './common/filters/not-found-exception.filter.js';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalFilters(new NotFoundExceptionFilter());
  await app.listen(process.env.PORT ?? 3000, '0.0.0.0');
}
await bootstrap();
