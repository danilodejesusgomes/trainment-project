// Update with your config settings.

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */

import { Knex } from 'knex';
import path from 'path';

const testEnvironment = {
  client: 'sqlite3',
  connection: {
    filename: path.resolve(
      __dirname,
      'data-architecture',
      'database',
      'test.sqlite'
    ),
    flags: ['OPEN_URI', 'OPEN_SHAREDCACHE'],
  },
  useNullAsDefault: true,
  migrations: {
    tableName: 'knex_migrations',
    directory: path.resolve(
      __dirname,
      'data-architecture',
      'database',
      'migrations'
    ),
    extension: 'ts',
  },
  seeds: {
    directory: path.resolve(
      __dirname,
      'data-architecture',
      'database',
      'seeds',
      'test'
    ),
  },
};

const developmentEnvironment = {
  client: 'mysql',
  connection: {
    host: '127.0.0.1',
    port: 3306,
    user: 'root',
    password: '123456',
    database: 'db_awsimulate',
  },
  migrations: {
    tableName: 'knex_migrations',
    directory: path.resolve(
      __dirname,
      'data-architecture',
      'database',
      'migrations'
    ),
    extension: 'ts',
  },
  seeds: {
    directory: path.resolve(
      __dirname,
      'data-architecture',
      'database',
      'seeds',
      'development'
    ),
  },
};

const knexConfiguration: Knex.Config =
  process.env.NODE_ENV === 'test' ? testEnvironment : developmentEnvironment;

export default knexConfiguration;
