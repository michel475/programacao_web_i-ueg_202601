import { ApiProperty } from '@nestjs/swagger';
import { CreateUserDto } from './create-user.dto';

export class CreateUserBatch {
    @ApiProperty({
        type: CreateUserDto,
    })
    users: CreateUserDto[];
}
