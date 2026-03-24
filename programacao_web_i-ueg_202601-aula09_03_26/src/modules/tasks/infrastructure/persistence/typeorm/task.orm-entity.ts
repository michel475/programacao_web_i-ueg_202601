import { User } from 'src/modules/users/domain/user';
import { UserOrmEntity } from 'src/modules/users/infrastructure/persistence/typeorm/user.orm-entity';
import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, ManyToOne } from 'typeorm';

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

    @Column()
    userId: number;

    @ManyToOne(() => User, (user) => user.task)
    user: User;

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;
}

