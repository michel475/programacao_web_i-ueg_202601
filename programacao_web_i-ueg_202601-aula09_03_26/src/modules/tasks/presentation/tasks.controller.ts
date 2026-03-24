import { Body, Controller, Delete, Get, Param, Post, Patch, Query } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiParam } from '@nestjs/swagger';
import { TaskService } from '../application/tasks.service';
import { CreateTaskDto } from './dto/create-task.dto';

@ApiTags('Tasks')
@Controller('tasks')
export class TasksController {
    constructor(private readonly taskService: TaskService) { }

    @Post()
    @ApiOperation({ summary: 'Cria uma nova tarefa' })
    create(@Body() dto: CreateTaskDto) {
        return this.taskService.create(dto.title, dto.priority, dto.userId);
    }

    @Get(':userId')
    @ApiParam({ name: 'userId', example: 1 })
    @ApiOperation({ summary: 'Lista tarefas de usuario' })
    findAllUsersTasks(@Param('userId') userId: string) {
        return this.taskService.findAllUsersTasks(Number(userId));
    }

    @Get('list')
    @ApiOperation({ summary: 'Lista tarefas' })
    findAll() {
        return this.taskService.findAll();
    }

    @Get(':id')
    @ApiParam({ name: 'id', example: 1 })
    @ApiOperation({ summary: 'Busca tarefa por id' })
    findById(@Param('id') id: string) {
        return this.taskService.findById(Number(id));
    }

    // @Patch(':id')
    // @ApiOperation({ summary: 'atualizar uma tarefa' })
    // update(@Param('id') id: string) {
    //     return this.taskService.update(Number(id));
    // }

    @Get('priority/:priority')
    @ApiOperation({ summary: 'Busca tarefa pela prioridade' })
    findByPriority(@Param('priority') priority: string) {
        return this.taskService.findByPriority(Number(priority));
    }

    @Get('done/:done')
    @ApiOperation({ summary: 'Busca as tarefas que foram finalizadas' })
    findByDone() {
        return this.taskService.findByDone();
    }

    @Patch(':id/done')
    @ApiOperation({ summary: 'Finaliza uma tarefa' })
    done(@Param('id') id: string) {
        return this.taskService.done(Number(id));
    }

    @Delete(':id')
    @ApiOperation({ summary: 'Remove uma tarefa' })
    delete(@Param('id') id: string) {
        return this.taskService.delete(Number(id));
    }
}
