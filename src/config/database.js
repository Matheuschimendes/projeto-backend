require('dotenv').config();

const baseConfig = {
  dialect: 'mysql',
  host: process.env.DB_HOST || '127.0.0.1',
  port: Number(process.env.DB_PORT) || 3306,
  username: process.env.DB_USER || 'root',
  password: process.env.DB_PASSWORD || '',
  define: {
    underscored: true,
    timestamps: true,
  },
};

module.exports = {
  development: {
    ...baseConfig,
    database: process.env.DB_NAME || 'projeto_backend',
  },
  test: {
    ...baseConfig,
    database: process.env.DB_TEST_NAME || 'projeto_backend_test',
  },
  production: {
    ...baseConfig,
    database: process.env.DB_NAME || 'projeto_backend',
  },
};
