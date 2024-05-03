import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';



async function bootstrap() {
  try {
    const app = await NestFactory.create(AppModule);
    
    app.enableCors({
      allowedHeaders: 'Content-Type, Accept, Access-Control-Allow-Origin',
      methods: "GET,PUT,POST,DELETE,UPDATE,OPTIONS",
      credentials: true,
      origin: true
    });
    await app.listen(2000);
  } catch (error) {}
}
bootstrap();
