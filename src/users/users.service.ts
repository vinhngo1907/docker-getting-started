import { Injectable } from '@nestjs/common';
import { UsersCreateDto } from './users.dto';
import { User } from './users.entity';
import { Repository } from 'typeorm'; import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class UsersService {
    constructor(
        @InjectRepository(User)
        private userRepository: Repository<User>) { }

    async getUser(): Promise<User[]> {
        const users = await this.userRepository.find();

        return users;
    }

    async createUser(createUser: UsersCreateDto): Promise<User> {
        const newUser = await this.userRepository.create({
            ...createUser
        });
        return await this.userRepository.save(newUser);
    }

    async getAllUsers() {
        return this.userRepository.find({});
    }
}
