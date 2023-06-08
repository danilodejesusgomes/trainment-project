import { Knex } from "knex";

export async function seed(knex: Knex): Promise<void> {
    
    // -----------------------------------------------------
    // Deletes ALL existing entries
    await knex("Person").del();
    // Inserts seed entries
    await knex("Person").insert([
        { id: 1, name: "Danilo Gomes", email: "danilodejesusgomes@gmail.com" },
        { id: 2, name: "Person 2", email: "person2@gmail.com" }
    ]);

};
