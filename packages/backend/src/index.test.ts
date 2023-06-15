import { describe, it, expect } from 'vitest';
import { getPersonDb } from './layers/db/entityPerson';
import db_awsimulate from '@database/index';

describe('Test server', () => {
  it('should do something', async () => {
    console.log('========== TEST:Started ==========');

    console.log('NODE_ENV ===> ', process.env.NODE_ENV);
    //const person = await getPersonDb(1);
    const person = await db_awsimulate('person').where({ id: 1 }).first();
    console.log('PERSON DB ==> ', person);

    console.log('========== TEST:Finished ==========');
    expect(1 + 4).toEqual(5);
  });
});
