import { Task } from '../../domain/task';

export interface TaskRepositoryPort {
    create(task: Task): Promise<Task>;
    findById(id: number): Promise<Task | null>;
    findAll(): Promise<Task[]>;
    findAllUsersTasks(userId: number): Promise<Task[] | null>;
    findByTitle(title: string): Promise<Task | null>;
    findByPriority(priority: number): Promise<Task[] | null>;
    findByDone(): Promise<Task[] | null>;
    update(task: Task): Promise<Task>;
    delete(id: number): Promise<Task | null>;
}
