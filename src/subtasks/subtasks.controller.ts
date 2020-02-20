import { Controller, Post, Body, UsePipes, ValidationPipe, UseGuards, UseInterceptors, Get, ParseIntPipe, Param, Delete, Put } from '@nestjs/common';
import { SubtasksService } from './subtasks.service';
import { CreateSubtasksDto } from './dto/create-subtasks.dto';
import { Subtask } from './subtasks.entity';
import { SubtaskGuard } from './subtasks.guards';
import { LoggingInterceptor } from './subtask.interceptor';
import { TransformInterceptor } from './transform.interceptor';
import { ErrorsInterceptor } from './errors.interceptor';
import { AuthGuard } from '@nestjs/passport';
import { ValidaTitleSubTaskPipe } from './pipes/valida-title.pipe';
import { UpdateSubtasksDto } from './dto/update-subtasks.dto';
import { ApiBody, ApiTags, ApiOkResponse, ApiNotFoundResponse } from '@nestjs/swagger';

@ApiTags('subtasks')
@Controller('subtasks')
@UsePipes(ValidationPipe)
// @UseGuards(SubtaskGuard, AuthGuard())
@UseInterceptors(LoggingInterceptor, TransformInterceptor)
export class SubtasksController {
    constructor(private subtasksService: SubtasksService) { }

    @Post()
    @UsePipes(ValidaTitleSubTaskPipe)
    createSubtask(@Body() subTaskDto: CreateSubtasksDto): Promise<Subtask> {
        console.log("Controller Create", subTaskDto);
        return this.subtasksService.createSubtask(subTaskDto);
    }

    @ApiOkResponse()
    @ApiNotFoundResponse({ description: 'Não foi encontrado subtarefas' })
    @Get()
    getSubtasks(): Promise<Subtask[]> {
        return this.subtasksService.getSubtasks();
    }

    @ApiOkResponse()
    @ApiNotFoundResponse({ description: 'Não foi encontrado subtarefas' })
    @Get('/:id')
    getSubtaskById(
        @Param('id', ParseIntPipe) id: number,
    ): Promise<Subtask> {
        return this.subtasksService.getSubtaskById(id);
    }

    @Delete('/:id')
    deleteSubtask(
        @Param('id', ParseIntPipe) id: number,
    ): Promise<void> {
        return this.subtasksService.deleteSubtask(id);
    }

    @Put('/:id')
    @UsePipes(ValidaTitleSubTaskPipe)
    updateSubtask(
        @Body() subTaskDto: UpdateSubtasksDto,
        @Param('id', ParseIntPipe) id: number,
    ): Promise<Subtask> {
        return this.subtasksService.updateSubtask(id, subTaskDto);
    }
}

/**
 * Module
 * Controller
 * Service(Provider)
 * Middleware
 * Exception filters
 * DTO
 * Entity
 * Repository
 * Pipe
 * Intercepts
 * Decorators
 */