import { Knex } from "knex";

export async function seed(knex: Knex): Promise<void> {

    // -----------------------------------------------------
    // Deletes ALL existing entries
    await knex("Exam").del();
    // Inserts seed entries
    await knex("Exam").insert([
        {   id: 1, 
            nameExam: "AWS Certified Cloud Practitioner", 
            descriptionExam: "AWS Certified Cloud Practitioner Description ",
            versionExam: "CLF-C01",
            timeDuration: "00:30:00",
            quantityTotalQuestions: 10
        },
        {   id: 2, 
            nameExam: "AWS Certified Solutions Architect Associate", 
            descriptionExam: "AWS Certified Solutions Architect Associate Description ",
            versionExam: "SAA-C03",
            timeDuration: "00:40:00",
            quantityTotalQuestions: 15
        },
        {   id: 3, 
            nameExam: "AWS Certified Solutions Architect Professional 2023", 
            descriptionExam: "AWS Certified Solutions Architect Professional 2023 Description ",
            versionExam: "SAP-C02",
            timeDuration: "00:50:00",
            quantityTotalQuestions: 20
        },
    ]);

};
