import { PersonDb, getPersonDb } from '@db/entityPerson';
import { Person, convertFromPersonDb } from './interface/Person';

export async function getPersonModel(idPerson: number): Promise<Person> {
  const personDb: PersonDb = await getPersonDb(idPerson);

  const person: Person = convertFromPersonDb(personDb);

  return person;
}
