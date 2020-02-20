import { TaskStatus } from '../task-status.enum';
import { IsOptional, IsIn, IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class GetTasksFilterDto {
  @ApiProperty({
    enum: ['OPEN', 'IN_PROGRESS', 'DONE'],
    required: false,
    default: "OPEN"
  })
  @IsOptional()
  @IsIn([TaskStatus.OPEN, TaskStatus.IN_PROGRESS, TaskStatus.DONE])
  status: TaskStatus;

  @ApiProperty({required: false})
  @IsOptional()
  @IsNotEmpty()
  search: string;
}
