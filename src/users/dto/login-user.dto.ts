import { isString } from "util";

import {IsNotEmpty, IsString, IsEmail, MinLength} from 'class-validator';

export class LoginUserDto {
   
    
    @IsNotEmpty()
    @IsString()
    @IsEmail()
    email: string;
    
    @IsNotEmpty()
    @IsString()
    @MinLength(6)
    password: string;
}