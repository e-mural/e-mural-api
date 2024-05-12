import { Injectable } from '@nestjs/common';
import config from './config';

@Injectable()
export class ConfigService {
  get sequelizeOrmConfig() {
    return config.database;
  }

  get jwtConfig() {
    return {
      accessSecretKey: config.jwt.jwtAccessSecretKey,
      accessExpiration: config.jwt.jwtAccessExpiration,
      refreshSecretKey: config.jwt.jwtRefreshSecretKey,
      refreshExpiration: config.jwt.jwtRefreshExpiration,
    };
  }
}
