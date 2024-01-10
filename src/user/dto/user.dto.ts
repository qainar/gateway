import { ApiProperty } from "@nestjs/swagger"
import { IsString } from "class-validator"


export class userDto {
    @ApiProperty({example: 'qainar.qkr@gmail.com', description: 'User E-mail'})
    @IsString({message: 'E-mail must be string'})
    readonly email: string

    @ApiProperty({example: 'qainar', description: 'Username'})
    @IsString({message: 'Username must be string'})
    readonly username: string

    @ApiProperty({example: '+7-(778)-314=65-03', description: 'User phone number'})
    @IsString({message: 'Phone must be string'})
    readonly phone: string

    @ApiProperty({example: '1111', description: 'Verify code'})
    @IsString({message: 'Code must be string'})
    readonly code: string
}