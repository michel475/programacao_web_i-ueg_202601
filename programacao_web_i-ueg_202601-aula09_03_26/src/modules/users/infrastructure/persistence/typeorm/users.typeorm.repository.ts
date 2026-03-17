import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UsersRepositoryPort } from '../../../application/ports/users.repository.port';
import { User } from '../../../domain/user';
import { UserOrmEntity } from './user.orm-entity';

@Injectable()
export class UsersTypeOrmRepository implements UsersRepositoryPort {
    constructor(
        @InjectRepository(UserOrmEntity)
        private readonly repo: Repository<UserOrmEntity>,
    ) { }

    async create(user: User): Promise<User> {
        const orm = this.repo.create({
            name: user.name,
            email: user.email,
            isActive: user.isActive,
        });
        const saved = await this.repo.save(orm);
        return this.toDomain(saved);
    }

    async createEmLote(users: User[]): Promise<User[]> {
        const orm = users.map(user => this.repo.create({
            name: user.name,
            email: user.email,
            isActive: user.isActive
        }));

        const saved = await this.repo.save(orm);
        return saved.map(this.toDomain);
    }

    async findById(id: number): Promise<User | null> {
        const found = await this.repo.findOneBy({ id });
        return found ? this.toDomain(found) : null;
    }

    async findAll(): Promise<User[]> {
        const items = await this.repo.find({ order: { id: 'DESC' } });
        return items.map(this.toDomain);
    }

    async findByEmail(email: string): Promise<User | null> {
        const emailTratado = email.replace("%40", "@");
        console.log(emailTratado);
        const found = await this.repo.findOneBy({ email: emailTratado });
        console.log(email);
        return found ? this.toDomain(found) : null;
    }

    async findByNome(name: string): Promise<User | null> {
        const found = await this.repo.findOneBy({ name: name, });
        return found ? this.toDomain(found) : null;
    }

    async update(user: User): Promise<User> {
        const orm = await this.repo.findOneBy({ id: user.id! });
        if (!orm) throw new Error('User not found');

        orm.name = user.name;
        orm.isActive = user.isActive;

        const saved = await this.repo.save(orm);
        return this.toDomain(saved);
    }

    async delete(id: number): Promise<User | null> {
        const usuario = await this.repo.findOneBy({ id });
        if (!usuario) return null;
        await this.repo.delete({ id });
        return this.toDomain(usuario);
    }

    private toDomain = (orm: UserOrmEntity): User => {
        return new User(orm.id, orm.name, orm.email, orm.isActive, orm.createdAt, orm.updatedAt);
    };
}
