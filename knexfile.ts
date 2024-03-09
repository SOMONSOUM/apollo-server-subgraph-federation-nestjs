import type { Knex } from 'knex';
import * as dotenv from 'dotenv';
dotenv.config();
const { SAS_DATABASE_URL, AAS_DATABASE_URL, DB_CLIENT } = process.env;

const config: { [key: string]: Knex.Config } = {
  developmentSAS: {
    client: DB_CLIENT,
    connection: SAS_DATABASE_URL,
    pool: {
      min: 2,
      max: 10,
    },
    seeds: {
      directory: './src/database/sas/seeds',
    },
    migrations: {
      tableName: 'knex_migrations',
      directory: './src/database/sas/migrations',
    },
  },
  stagingSAS: {
    client: DB_CLIENT,
    connection: SAS_DATABASE_URL,
    pool: {
      min: 2,
      max: 10,
    },
    seeds: {
      directory: './src/database/sas/seeds',
    },
    migrations: {
      tableName: 'knex_migrations',
      directory: './src/database/sas/migrations',
    },
  },
  productionSAS: {
    client: DB_CLIENT,
    connection: SAS_DATABASE_URL,
    pool: {
      min: 2,
      max: 10,
    },
    seeds: {
      directory: './src/database/sas/seeds',
    },
    migrations: {
      tableName: 'knex_migrations',
      directory: './src/database/sas/migrations',
    },
  },

  developmentAAS: {
    client: DB_CLIENT,
    connection: AAS_DATABASE_URL,
    pool: {
      min: 2,
      max: 10,
    },
    seeds: {
      directory: './src/database/aas/seeds',
    },
    migrations: {
      tableName: 'knex_migrations',
      directory: './src/database/aas/migrations',
    },
  },
  stagingAAS: {
    client: DB_CLIENT,
    connection: AAS_DATABASE_URL,
    pool: {
      min: 2,
      max: 10,
    },
    seeds: {
      directory: './src/database/aas/migrations',
    },
    migrations: {
      tableName: 'knex_migrations',
      directory: './src/database/aas/migrations',
    },
  },
  productionAAS: {
    client: DB_CLIENT,
    connection: AAS_DATABASE_URL,
    pool: {
      min: 2,
      max: 10,
    },
    seeds: {
      directory: './src/database/aas/seeds',
    },
    migrations: {
      tableName: 'knex_migrations',
      directory: './src/database/aas/migrations',
    },
  },
};

module.exports = config;
