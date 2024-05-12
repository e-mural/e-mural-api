export const config = {
  database: {
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: 'password',
    database: 'e-mural',
    logging: false,
  },
  jwt: {
    jwtAccessSecretKey: 'jwtAccessSecretKey',
    jwtAccessExpiration: '2m',
    jwtRefreshSecretKey: 'jwtRefreshSecretKey',
    jwtRefreshExpiration: '5m',
  },
};
