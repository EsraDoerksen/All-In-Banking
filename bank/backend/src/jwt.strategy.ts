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
      // issuer: configurationService.JWT_CONFIGURATION.JWT_ISSUER,
      // audience: configurationService.JWT_CONFIGURATION.JWT_CLIENT_ID,
    });
  }

  async validate(payload: any) {
    return { userId: payload.sub, username: payload.username };
  }
}
