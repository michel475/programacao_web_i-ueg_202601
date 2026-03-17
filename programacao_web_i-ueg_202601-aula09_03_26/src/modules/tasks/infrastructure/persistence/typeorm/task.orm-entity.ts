import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from 'typeorm';

@Entity('tasks')
export class TaskOrmEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 120 })
    title: string;

    @Column({ unique: false })
    priority: number;

    @Column({ default: false })
    isDone: boolean;

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;
}

