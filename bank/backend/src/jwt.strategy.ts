import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable } from '@nestjs/common';
import { passportJwtSecret } from 'jwks-rsa';
import { ConfigurationService } from './config/configuration.service';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(configurationService: ConfigurationService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKeyProvider: passportJwtSecret({
        jwksUri: configurationService.jwkUri,
        handleSigningKeyError: (err, cb) => {
          console.warn(err);
          cb(err);
        },
      }),
      issuer: 'https://dev-o8lopd1x78xgb35o.us.auth0.com/',
      audience: '1IOUcn5eG1ZTrI8DJ9V4690c8T40NK3U',
    });
  }

  //   async validate(payload: any) {
  //     return { userId: payload.sub, username: payload.username };
  //   }
}