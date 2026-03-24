import { HttpException, HttpStatus, Inject, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { TaskRepositoryPort } from '../../../application/ports/tasks.repository.port';
import { Task } from '../../../domain/task';
import { TaskOrmEntity } from './task.orm-entity';
import type { UsersRepositoryPort } from '../../../../users/application/ports/users.repository.port';

@Injectable()
export class TasksTypeOrmRepository implements TaskRepositoryPort {
    constructor(
        @Inject('UsersRepositoryPort')
        private readonly userRepo: UsersRepositoryPort,
        @InjectRepository(TaskOrmEntity)
        private readonly repo: Repository<TaskOrmEntity>,
    ) { }

    async create(task: Task): Promise<Task> {
        const user = await this.userRepo.findById(task.userId);
        if (!user) throw new HttpException('User not found', HttpStatus.NOT_FOUND);
        const orm = this.repo.create({
            title: task.title,
            priority: task.priority,
            isDone: task.isDone,
            createdAt: task.createdAt,
            updatedAt: task.updatedAt
        });
        const saved = await this.repo.save(orm);
        return this.toDomain(saved);
    }

    async findByDone(): Promise<Task[] | null> {
        const tasks = await this.repo.find({ where: { isDone: true }, order: { id: 'DESC' } });
        return tasks.map(this.toDomain);
    }

    async findAllUsersTasks(userId: number): Promise<Task[] | null> {
        const tasks = await this.repo.findBy({ user: { id: userId } })
        return tasks.map(this.toDomain);
    }

    async findById(id: number): Promise<Task | null> {
        const found = await this.repo.findOneBy({ id });
        if (!found)
            throw new HttpException("Task not found", HttpStatus.NOT_FOUND);
        return this.toDomain(found);
    }

    async findAll(): Promise<Task[]> {
        const tasks = await this.repo.find({ order: { id: 'DESC' } });
        return tasks.map(this.toDomain);
    }

    async findByPriority(priority: number): Promise<Task[] | null> {
        const tasks = await this.repo.find({ where: { priority: priority }, order: { id: 'DESC' } });
        return tasks.map(this.toDomain);
    }

    async findByTitle(name: string): Promise<Task | null> {
        const found = await this.repo.findOneBy({ title: name, });
        return found ? this.toDomain(found) : null;
    }

    async update(task: Task): Promise<Task> {
        const orm = await this.repo.findOneBy({ id: task.id! });
        if (!orm) throw new HttpException('Task not found', HttpStatus.NOT_FOUND);

        orm.title = task.title;
        orm.priority = task.priority;
        orm.isDone = task.isDone;

        const saved = await this.repo.save(orm);
        return this.toDomain(saved);
    }

    async delete(id: number): Promise<Task | null> {
        const task = await this.repo.findOneBy({ id });
        if (!task) return null;
        await this.repo.delete({ id });
        return this.toDomain(task);
    }

    private toDomain = (orm: TaskOrmEntity): Task => {
        return new Task(orm.id, orm.title, orm.priority, orm.isDone, orm.user.id, orm.createdAt, orm.updatedAt);
    };
}
