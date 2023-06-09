import { getPerson } from "./layers/db/entityPerson";

const person = async () => {
    await getPerson(1);
    console.log('INDEX => ', person);
}
