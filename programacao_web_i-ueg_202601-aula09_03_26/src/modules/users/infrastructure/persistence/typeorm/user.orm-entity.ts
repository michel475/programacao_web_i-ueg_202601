import { Task } from 'src/modules/tasks/domain/task';
import { TaskOrmEntity } from 'src/modules/tasks/infrastructure/persistence/typeorm/task.orm-entity';
import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, OneToMany } from 'typeorm';

@Entity('users')
export class UserOrmEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @OneToMany(() => Task, task => task.user)
    tasks: Task[];

    @Column({ length: 120 })
    name: string;

    @Column({ unique: true, length: 160 })
    email: string;

    @Column({ default: true })
    isActive: boolean;

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;

}

