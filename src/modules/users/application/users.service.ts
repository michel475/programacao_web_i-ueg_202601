import type { UsersRepositoryPort } from './ports/users.repository.port';
import { User } from '../domain/user';
import { Inject, Injectable } from '@nestjs/common';
import { CreateUserDto } from '../presentation/dto/create-user.dto';
import { CreateUserBatch } from '../presentation/dto/create-user-batch.dto';

@Injectable()
export class UsersService {
    constructor(
        @Inject('UsersRepositoryPort')
        private readonly usersRepo: UsersRepositoryPort,) { }

    async create(name: string, email: string): Promise<User> {
        const existing = await this.usersRepo.findByEmail(email);
        if (existing) throw new Error('E-mail já cadastrado');

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
        return this.usersRepo.findAll();
    }

    async findByEmail(email: string): Promise<User | null> {
        return this.usersRepo.findByEmail(email);
    }

    async findByNome(name: string): Promise<User | null> {
        return this.usersRepo.findByNome(name);
    }

    async findById(id: number): Promise<User | null> {
        return this.usersRepo.findById(id);
    }

    async deactivate(id: number): Promise<User> {
        const user = await this.usersRepo.findById(id);
        if (!user) throw new Error('Usuário não encontrado');

        user.isActive = false;
        return this.usersRepo.update(user);
    }

    async delete(id: number): Promise<void> {
        await this.usersRepo.delete(id);
    }
}
