import { Global, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserOrmEntity } from '../../modules/users/infrastructure/persistence/typeorm/user.orm-entity';
import { TaskOrmEntity } from '../../modules/tasks/infrastructure/persistence/typeorm/task.orm-entity';

@Global()
@Module({
    imports: [
        TypeOrmModule.forRoot({
            type: 'sqlite',
            database: 'data/app.db',
            entities: [UserOrmEntity, TaskOrmEntity],
            synchronize: true,
        }),
    ],
    exports: [TypeOrmModule],
})
export class DatabaseModule { }
