import { describe, it, expect } from 'vitest';

describe('Test FrontEnd', () => {
  it('should do something', async () => {
    console.log('========== FrontEnd:Started ==========');

    //console.log('NODE_ENV ===> ', process.env.NODE_ENV);
    //const person = await getPersonDb(1);
    //const person = await db_awsimulate('person').where({ id: 1 }).first();
    //console.log('PERSON DB ==> ', person);

    console.log('========== FrontEnd:Finished ==========');
    expect(1 + 4).toEqual(5);
  });
});
