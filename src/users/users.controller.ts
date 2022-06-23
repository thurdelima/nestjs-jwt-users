import { Controller, Post, HttpCode, HttpStatus, Body, Req, UseGuards, Get } from '@nestjs/common';
import { Request } from 'express';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { LoginUserDto } from './dto/login-user.dto';
import { AuthGuard } from '@nestjs/passport';

@Controller('users')
export class UsersController {

    constructor(private readonly usersService: UsersService) {

    }

    @Post()
    @HttpCode(HttpStatus.CREATED)
    public async create(@Body() user: CreateUserDto) {

        return this.usersService.create(user);

    }

    @Post('login')
    @HttpCode(HttpStatus.OK)
    public async login(@Req() req: Request, @Body() data: LoginUserDto) {
        return this.usersService.login(req, data);
    }



    @Get('data')
    @UseGuards(AuthGuard('jwt'))
    @HttpCode(HttpStatus.OK)
    public data() {
        return 'Hello';
    }
}
