import { Injectable, NotFoundException } from '@nestjs/common';
import { Subtask } from './subtasks.entity';
import { SubtaskRepository } from './subtasks.repository';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateSubtasksDto } from './dto/create-subtasks.dto';
import { UpdateSubtasksDto } from './dto/update-subtasks.dto';

@Injectable()
export class SubtasksService {

    constructor(
        @InjectRepository(SubtaskRepository)
        private subtaskRepository: SubtaskRepository,
    ) { }

    createSubtask(subTaskDto: CreateSubtasksDto): Promise<Subtask> {
        return this.subtaskRepository.createSubtask(subTaskDto);
    }

    async updateSubtask(id: number, subTaskDto: UpdateSubtasksDto): Promise<Subtask> {
        const { title, description } = subTaskDto;
        const subtask = await this.getSubtaskById(id);
        subtask.title = title ? title : subtask.title;
        subtask.description = description ? description : subtask.description;
        await subtask.save();
        return subtask;
    }

    async getSubtasks(): Promise<Subtask[]> {
        return await this.subtaskRepository.find();
    }

    async getSubtaskById(id): Promise<Subtask> {
        const found = await this.subtaskRepository.findOne({ where: { id } });

        if (!found) {
            throw new NotFoundException(`Subtask with ID "${id}" not found`);
        }

        return found;
    }

    async deleteSubtask(id): Promise<void> {
        const result = await this.subtaskRepository.delete({ id });

        if (result.affected === 0) {
            throw new NotFoundException(`Subtask with ID "${id}" not found`);
        }
    }
}
