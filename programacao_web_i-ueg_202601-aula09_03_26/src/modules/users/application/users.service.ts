import type { UsersRepositoryPort } from './ports/users.repository.port';
import { User } from '../domain/user';
import { Inject, Injectable, HttpStatus, HttpException } from '@nestjs/common';
import { CreateUserDto } from '../presentation/dto/create-user.dto';
import { CreateUserBatch } from '../presentation/dto/create-user-batch.dto';

@Injectable()
export class UsersService {
    constructor(
        @Inject('UsersRepositoryPort')
        private readonly usersRepo: UsersRepositoryPort,) { }

    async create(name: string, email: string): Promise<User> {
        const existing = await this.usersRepo.findByEmail(email);
        if (existing) throw new HttpException('E-mail já cadastrado', HttpStatus.BAD_REQUEST);
        const user = new User(null, name.trim(), email.trim().toLowerCase(), true);
        return this.usersRepo.create(user);
    }

    async createEmLote(dtos: CreateUserDto[]): Promise<User[]> {

        const userEmLote = dtos.map(dto =>
            new User(null, dto.name.trim(), dto.email.trim().toLowerCase(), true)
        );

        return this.usersRepo.createEmLote(userEmLote);
    }

    async findAll(): Promise<User[]> {
        const users: User[] = await this.usersRepo.findAll();
        if (users.length === 0) throw new HttpException("Nenhum usuário encontrado", HttpStatus.NOT_FOUND);
        return this.usersRepo.findAll();
    }

    async findByEmail(email: string): Promise<User | null> {
        const user = await this.usersRepo.findByEmail(email);
        return this.usersRepo.findByEmail(email);
    }

    async findByNome(name: string): Promise<User | null> {
        return this.usersRepo.findByNome(name);
    }

    async findById(id: number): Promise<User | null> {
        const user = await this.usersRepo.findById(id);
        if (!user) {
            throw new HttpException("Usuário não encontrado", HttpStatus.NOT_FOUND);
        }
        return user;
    }

    async deactivate(id: number): Promise<User> {
        const user = await this.usersRepo.findById(id);
        if (!user) throw new HttpException('Usuário não encontrado', HttpStatus.NOT_FOUND);

        user.isActive = false;
        return this.usersRepo.update(user);
    }

    async delete(id: number): Promise<User> {
        const usuario = await this.usersRepo.delete(id);
        if (!usuario) {
            throw new HttpException("Usuário não encontrado", HttpStatus.NOT_FOUND);
        }
        return usuario;
    }
}
