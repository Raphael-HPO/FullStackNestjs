import { Transform } from "class-transformer";
import { IsEmail, IsNotEmpty, IsString } from "class-validator";
import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
    @ApiProperty({ description: "Inclusão de nome do usuário", example: "Flávio" })
    @IsString()
    @IsNotEmpty()
    @Transform(({ value }) => value.toLowerCase())
    readonly name: string;
    @ApiProperty({ description: "Inclusão de email do usuário", example: "Flávio@ativalog.com.br" })
    @IsEmail()
    @IsNotEmpty()
    @Transform(({ value }) => value.toLowerCase().trim())
    readonly email: string;
}
