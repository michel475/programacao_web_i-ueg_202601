export class Task {
    constructor(
        public readonly id: number | null,
        public title: string,
        public priority: number,
        public isDone: boolean,
        public readonly createdAt?: Date,
        public readonly updatedAt?: Date,
    ) { }
}
