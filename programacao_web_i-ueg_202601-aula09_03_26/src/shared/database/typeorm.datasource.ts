import 'reflect-metadata';
import { DataSource } from 'typeorm';
import { UserOrmEntity } from '../../modules/users/infrastructure/persistence/typeorm/user.orm-entity';
import { TaskOrmEntity } from '../../modules/tasks/infrastructure/persistence/typeorm/task.orm-entity';

export const AppDataSource = new DataSource({
    type: 'sqlite',
    database: 'data/app.db',
    entities: [UserOrmEntity, TaskOrmEntity],
    synchronize: true,
});