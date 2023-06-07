import db_awsimulate from "../data-architecture/database";

interface Person {
    idPerson: number;
    namePerson: string;
    emailPerson: string;
};

const person = db_awsimulate('Person').select('*').then((data: Person[]) => {
    console.log(data);
});