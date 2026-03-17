import { ApiProperty } from '@nestjs/swagger';

export class CreateTaskDto {
    @ApiProperty({ example: 'Implementar API REST de programação web i' })
    title: string;

    @ApiProperty({ example: 5 })
    priority: number;
}
