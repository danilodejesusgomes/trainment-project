import { Knex } from "knex";

export async function seed(knex: Knex): Promise<void> {

    // -----------------------------------------------------
    // Deletes ALL existing entries
    await knex("QuestionType").del();
    // Inserts seed entries
    await knex("QuestionType").insert([
        {   id: 1, 
            name: "Single choice",
            quantityChoose: 1
        },
        {   id: 2, 
            name: "Double choice",
            quantityChoose: 2
        }
    ]);
};
