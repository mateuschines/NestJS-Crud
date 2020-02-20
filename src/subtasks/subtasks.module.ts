import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import { SubtasksController } from './subtasks.controller';
import { SubtasksService } from './subtasks.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SubtaskRepository } from './subtasks.repository';
import { SubtaskMiddleware } from './subtasks.middleware';
import { AuthModule } from 'src/auth/auth.module';
import { TestSubtaskMiddleware } from './middleware/test-subtask.middleware';

@Module({
  imports: [
    TypeOrmModule.forFeature([SubtaskRepository]),
    AuthModule,
  ],
  controllers: [SubtasksController],
  providers: [SubtasksService]
})
export class SubtasksModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(SubtaskMiddleware, TestSubtaskMiddleware)
      .forRoutes('subtasks');
  }
}
