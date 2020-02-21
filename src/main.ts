import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';
import { AuthModule } from './auth/auth.module';
import { TasksModule } from './tasks/tasks.module';
import { SubtasksModule } from './subtasks/subtasks.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  //Swagger
  const options = new DocumentBuilder()
    .setTitle('Module All')
    .setDescription('The API description')
    .setVersion('1.0.0')
    .addTag('auth')
    .addTag('tasks')
    .addTag('subtasks')
    .build();
  const document = SwaggerModule.createDocument(app, options, {
    include: [AuthModule, TasksModule, SubtasksModule],
  });
  SwaggerModule.setup('api', app, document);

  // if (process.env.NODE_ENV === 'development') {
    app.enableCors();
  // } else {
    // app.enableCors({ origin: "urldaappempreductions" });
  // }
  await app.listen(3000);
}
bootstrap();
