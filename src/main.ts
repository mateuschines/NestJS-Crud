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
    .setTitle('Module Auth')
    .setDescription('The auth API description')
    .setVersion('1.0.0')
    .addTag('auth')
    .build();
  const document = SwaggerModule.createDocument(app, options, {
    include: [AuthModule],
  });
  SwaggerModule.setup('api/auth', app, document);

  const Taskoptions = new DocumentBuilder()
    .setTitle('Module Tasks')
    .setDescription('The tasks API description')
    .setVersion('1.0.0')
    .addTag('tasks')
    .build();
  const Tasksdocument = SwaggerModule.createDocument(app, Taskoptions, {
    include: [TasksModule],
  });
  SwaggerModule.setup('api/tasks', app, Tasksdocument);

  const Subtaskoptions = new DocumentBuilder()
    .setTitle('Module Subtasks')
    .setDescription('The subtasks API description')
    .setVersion('1.0.0')
    .addTag('subtasks')
    .build();
  const Subtasksdocument = SwaggerModule.createDocument(app, Subtaskoptions, {
    include: [SubtasksModule],
  });
  SwaggerModule.setup('api/subtasks', app, Subtasksdocument);

  // if (process.env.NODE_ENV === 'development') {
    app.enableCors();
  // } else {
    // app.enableCors({ origin: "urldaappempreductions" });
  // }
  await app.listen(3000);
}
bootstrap();
