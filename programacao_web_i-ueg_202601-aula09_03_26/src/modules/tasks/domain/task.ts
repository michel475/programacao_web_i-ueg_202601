import { User } from "src/modules/users/domain/user";

export class Task {
    constructor(
        public readonly id: number | null,
        public title: string,
        public priority: number,
        public isDone: boolean,
        public user: User,
        public readonly createdAt?: Date,
        public readonly updatedAt?: Date,
    ) { }
}
