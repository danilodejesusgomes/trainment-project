import knex from 'knex';
import knexConfiguration from '@backend/knexfile';

const connection = knex(knexConfiguration);
export default connection;
