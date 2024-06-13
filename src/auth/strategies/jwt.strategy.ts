import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { ConfigService } from '@nestjs/config';
import { User } from '../../users/entities/user.entity';
// import { JwtPayload } from '../interfaces/jwt-payload.interface';

import { AuthService } from '../auth.service';
import { JwtPayload } from '../interfaces/jwt-payload.interface';

@Injectable()
export class JwtStrategy extends PassportStrategy( Strategy ){

    constructor(
        private readonly authService: AuthService,

        ConfigService: ConfigService
    ) {
        super({
            secretOrKey: ConfigService.get('JWT_SECRET'),
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken()
        })
    }

    async validate( payload: JwtPayload): Promise<User> {
        
        // console.log('payload', payload);
        // throw new UnauthorizedException('Token is not authorized');
        const { id } = payload;

        const user = await this.authService.validateUser( id );

        // console.log('user', user);

        // throw new UnauthorizedException('Token is not authorized');

        return user;
        
    }
}