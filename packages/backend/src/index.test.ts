import { describe, it, expect } from 'vitest';
import { getPersonDb } from './layers/db/entityPerson';

describe('Test server', () => {
  it('should do something', async () => {
    console.log('========== TEST:Started ==========');
    const person = await getPersonDb(1);
    console.log('PERSON DB ==> ', person);

    console.log('========== TEST:Finished ==========');
    expect(1 + 4).toEqual(5);
  });
});
