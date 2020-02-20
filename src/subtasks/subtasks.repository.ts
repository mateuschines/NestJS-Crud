import { EntityRepository, Repository } from 'typeorm';
import {Subtask} from './subtasks.entity';
import { CreateSubtasksDto } from './dto/create-subtasks.dto';

@EntityRepository(Subtask)
export class SubtaskRepository extends Repository<Subtask> {

  async createSubtask(
    subTaskDto: CreateSubtasksDto,
  ): Promise<Subtask> {
    const { title, description } = subTaskDto;

    const subtask = new Subtask();
    subtask.title = title;
    subtask.description = description;
    await subtask.save();

    return subtask;
  }
}
