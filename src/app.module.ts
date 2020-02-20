import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import { TasksModule } from './tasks/tasks.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmConfig } from './config/typeorm.config';
import { AuthModule } from './auth/auth.module';
import { SubtasksModule } from './subtasks/subtasks.module';
import { SubtaskMiddleware } from './subtasks/subtasks.middleware';

@Module({
  imports: [
    TypeOrmModule.forRoot(typeOrmConfig),
    TasksModule,
    AuthModule,
    SubtasksModule,
  ],
})
export class AppModule {}

