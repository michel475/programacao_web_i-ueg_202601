import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TasksController } from './presentation/tasks.controller';
import { TaskService } from './application/tasks.service';
import { TaskOrmEntity } from './infrastructure/persistence/typeorm/task.orm-entity';
import { TasksTypeOrmRepository } from './infrastructure/persistence/typeorm/tasks.typeorm.repository';
import { UsersModule } from '../users/users.module';

@Module({
    imports: [
        TypeOrmModule.forFeature([TaskOrmEntity]),
        UsersModule,
    ],
    controllers: [TasksController],
    providers: [
        TaskService,
        {
            provide: 'TaskRepositoryPort',
            useClass: TasksTypeOrmRepository,
        }
    ],
})
export class TasksModule { }
