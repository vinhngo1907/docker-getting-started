import { Body, Controller, Get, Post } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersCreateDto } from './users.dto';
import { User } from './users.entity';

@Controller('users')
export class UsersController {
    constructor(private readonly usersService: UsersService) { }

    @Post()   
    async addUser( @Body() usersCreateDto: UsersCreateDto) {
        return this.usersService.createUser(usersCreateDto)
    }

    @Get()
    async getUsers(): Promise<User[]> {
        return this.usersService.getAllUsers();
    }
}