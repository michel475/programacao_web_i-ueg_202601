import { Task } from "src/modules/tasks/domain/task";

export class User {
    constructor(
        public readonly id: number | null,
        public name: string,
        public email: string,
        public isActive: boolean,
        public task: Task[],
        public readonly createdAt?: Date,
        public readonly updatedAt?: Date,
    ) { }
}
