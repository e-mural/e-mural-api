export const settings = () => ({
  app: {
    host: process.env.APP_HOST,
    port:
      parseInt(process.env.PORT) || parseInt(process.env.APP_PORT, 10) || 3000,
    url: process.env.APP_URL,
  },
  database: {
    dialect: process.env.DATABASE_DIALECT,
    host: process.env.DATABASE_HOST,
    port: parseInt(process.env.DATABASE_PORT, 10) || 5432,
    username: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    name: process.env.DATABASE_NAME,
  },
  swagger: {
    route: process.env.SWAGGER_ROUTE,
    title: process.env.SWAGGER_TITLE,
    description: process.env.SWAGGER_DESCRIPTION,
    version: process.env.SWAGGER_VERSION,
  },
  logger: {
    target: 'pino-pretty',
  },
  health: {
    ping: {
      key: 'e-mural api',
      url: process.env.APP_URL,
    },
    storage: {
      key: 'storage',
      path: '/',
      thresholdPercent: 0.5,
    },
    database: {
      key: 'database',
      timeout: 1500,
    },
    memory: {
      heap: {
        key: 'heap',
        size: 150 * 1024 * 1024, //150MB
      },
      rss: {
        key: 'rss',
        size: 150 * 1024 * 1024, //150MB
      },
    },
  },
  systemUserEmail: process.env.SYSTEM_USER_EMAIL,
});
