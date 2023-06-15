import db_awsimulate from '@database/index';

export interface PersonDb {
  id: number;
  name: string;
  email: string;
  password: string;
  token_validation_email: number;
  token_validation_email_expiration: Date;
  token_reset_password: number;
  token_reset_password_expiration: Date;
}

const getPersonTable = () => db_awsimulate.table('Person');

export async function getPersonDb(idPerson: number): Promise<PersonDb> {
  const person: PersonDb = await getPersonTable()
    .first()
    .where({ id: idPerson });

  console.log('Person => ', person);
  return person;
}
