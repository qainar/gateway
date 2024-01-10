import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { userDto } from 'src/user/dto/user.dto';

@Injectable()
export class AuthService {
    constructor(@Inject('AUTH_SERVICE') private readonly authService: ClientProxy){}

    async registration(userData: userDto){
        const register_user = await this.authService.send<userDto>('register', userData).toPromise()

        return register_user
    }

    async checkCode(userData){
        const token = await this.authService.send<userDto>('check_code', userData).toPromise()

        return token
    }
}
