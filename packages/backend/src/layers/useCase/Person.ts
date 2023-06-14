import { getPersonModel } from '@model/Person';
import { Person } from '@model/interface/Person';

export async function getPerson(idPerson: number): Promise<Person> {
  const person: Person = await getPersonModel(idPerson);

  return person;
}
