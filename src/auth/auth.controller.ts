import { Body, Controller, Injectable, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { userDto } from '../user/dto/user.dto';

@Controller('auth')
export class AuthController {
    constructor (private readonly authService: AuthService) {}

    @Post('/registration')
    async registration (@Body() userData: userDto){
        const registeredUser = await this.authService.registration(userData)

        return registeredUser
    }
}
