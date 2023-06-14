import { PersonDb } from '@db/entityPerson';

export interface Person {
  id: number;
  name: string;
  email: string;
  password: string;
  token_validation_email: number;
  token_validation_email_expiration: Date;
  token_reset_password: number;
  token_reset_password_expiration: Date;
}

export function convertFromPersonDb(personDb: PersonDb): Person {
  return {
    id: personDb.id,
    name: personDb.name,
    email: personDb.email,
    password: personDb.password,
    token_validation_email: personDb.token_validation_email,
    token_validation_email_expiration:
      personDb.token_validation_email_expiration,
    token_reset_password: personDb.token_reset_password,
    token_reset_password_expiration: personDb.token_reset_password_expiration,
  };
}
