import { Body, Controller, Delete, Get, Param, Post, Patch } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiParam } from '@nestjs/swagger';
import { UsersService } from '../application/users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { CreateUserBatch } from './dto/create-user-batch.dto';

@ApiTags('Users')
@Controller('users')
export class UsersController {
    constructor(private readonly usersService: UsersService) { }

    @Post()
    @ApiOperation({ summary: 'Cria um usuário' })
    create(@Body() dto: CreateUserDto) {
        return this.usersService.create(dto.name, dto.email);
    }
    @Post(":criaEmLote")
    @ApiOperation({ summary: 'Cria usuários em lote' })
    createEmLote(@Body() dto: CreateUserBatch) {
        return this.usersService.createEmLote(dto.users);
    }

    @Get()
    @ApiOperation({ summary: 'Lista usuários' })
    findAll() {
        return this.usersService.findAll();
    }

    @Get(':id')
    @ApiParam({ name: 'id', example: 1 })
    @ApiOperation({ summary: 'Busca usuário por id' })
    findById(@Param('id') id: string) {
        return this.usersService.findById(Number(id));
    }

    @Get(':email')
    @ApiOperation({ summary: 'Busca usuário pelo email' })
    findByEmail(@Param('email') email: string) {
        return this.usersService.findByEmail(email);
    }

    @Get(':name')
    @ApiParam({ name: 'name' })
    @ApiOperation({ summary: 'Busca usuário pelo nome' })
    findByNome(@Param('name') name: string) {
        return this.usersService.findByNome(name);
    }

    @Patch(':id/deactivate')
    @ApiOperation({ summary: 'Desativa um usuário' })
    deactivate(@Param('id') id: string) {
        return this.usersService.deactivate(Number(id));
    }

    @Delete(':id')
    @ApiOperation({ summary: 'Remove um usuário' })
    delete(@Param('id') id: string) {
        return this.usersService.delete(Number(id));
    }
}
