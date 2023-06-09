import { getPersonDb } from "./layers/db/entityPerson";

const person = async () => {
    await getPersonDb(1);
    console.log('INDEX => ', person);
}
