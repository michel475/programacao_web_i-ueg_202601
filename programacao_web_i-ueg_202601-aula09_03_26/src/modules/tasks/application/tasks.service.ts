import type { TaskRepositoryPort } from './ports/tasks.repository.port';
import { Task } from '../domain/task';
import { Inject, Injectable, HttpStatus, HttpException } from '@nestjs/common';
import { CreateTaskDto } from '../presentation/dto/create-task.dto';
import type { UsersRepositoryPort } from 'src/modules/users/application/ports/users.repository.port';

@Injectable()
export class TaskService {
    constructor(
        @Inject('UserRepositoryPort')
        private readonly userRepo: UsersRepositoryPort,
        @Inject('TaskRepositoryPort')
        private readonly taskRepo: TaskRepositoryPort,) { }

    async create(title: string, priority: number, userId: number): Promise<Task> {
        const existing = await this.taskRepo.findByTitle(title);
        const user = await this.userRepo.findById(userId);
        if (!user) throw new HttpException('Usuário não encontrado', HttpStatus.NOT_FOUND);
        if (existing) throw new HttpException('Tarefa já cadastrada', HttpStatus.BAD_REQUEST);
        const task = new Task(null, title.trim(), priority, false, user, new Date(), new Date());
        return this.taskRepo.create(task);
    }

    async findByDone(): Promise<Task[] | null> {
        const tasks: Task[] | null = await this.taskRepo.findByDone();
        if (tasks?.length === 0) throw new HttpException("Nenhuma tarefa foi finalizada ou não há tarefas", HttpStatus.NOT_FOUND);
        return tasks;
    }

    async findAll(): Promise<Task[]> {
        const tasks: Task[] = await this.taskRepo.findAll();
        if (tasks.length === 0) throw new HttpException("Nenhuma tarefa encontrada", HttpStatus.NOT_FOUND);
        return this.taskRepo.findAll();
    }

    async findAllUsersTasks(userId: number): Promise<Task[] | null> {
        const tasks: Task[] = await this.taskRepo.findAll();
        if (tasks.length === 0) throw new HttpException("Nenhuma tarefa encontrada", HttpStatus.NOT_FOUND);
        return this.taskRepo.findAllUsersTasks(userId);
    }

    // async update(id:number): Promise<Task|null> {
    //     const task = await this.taskRepo.findById(id);
    // }

    async findByPriority(priority: number): Promise<Task[] | null> {
        const tasks: Task[] | null = await this.taskRepo.findByPriority(priority);
        if (tasks?.length === 0) throw new HttpException("Nenhuma tarefa encontrada", HttpStatus.NOT_FOUND);
        return tasks;
    }

    async findByTitle(name: string): Promise<Task | null> {
        return this.taskRepo.findByTitle(name);
    }

    async findById(id: number): Promise<Task | null> {
        const task = await this.taskRepo.findById(id);
        if (!task) {
            throw new HttpException("Tarefa não encontrada", HttpStatus.NOT_FOUND);
        }
        return task;
    }

    async done(id: number): Promise<Task> {
        const task = await this.taskRepo.findById(id);
        if (!task) throw new HttpException('Tarefa não encontrada', HttpStatus.NOT_FOUND);

        task.isDone = true;
        return this.taskRepo.update(task);
    }

    async delete(id: number): Promise<Task> {
        const task = await this.taskRepo.delete(id);
        if (!task) {
            throw new HttpException("Tarefa não encontrada", HttpStatus.NOT_FOUND);
        }
        return task;
    }
}
