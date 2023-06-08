import { Knex } from "knex";

export async function seed(knex: Knex): Promise<void> {

    // -----------------------------------------------------
    // Deletes ALL existing entries
    await knex("QuestionSubject").del();
    // Inserts seed entries
    await knex("QuestionSubject").insert([
        {   id: 1, 
            name: "AWS Compute"
        },
        {   id: 2, 
            name: "AWS Database"
        },
        {   id: 3, 
            name: "AWS Cost Management"
        },
        {   id: 4, 
            name: "AWS Networking & Content Delivery"
        },
        {   id: 5, 
            name: "AWS Security, Identity & Compliance"
        },
        {   id: 6, 
            name: "AWS Cloud Architecture & Desing"
        },
        {   id: 7, 
            name: "AWS Cloud Benefits"
        },
        {   id: 8, 
            name: "AWS Management & Governance"
        },
        {   id: 9, 
            name: "AWS Developer Tools"
        },
        {   id: 10, 
            name: "AWS Storage"
        },
        {   id: 11, 
            name: "AWS Application Integration"
        },
        {   id: 12, 
            name: "AWS Shared Responsibility Model"
        },
    ]);

};
