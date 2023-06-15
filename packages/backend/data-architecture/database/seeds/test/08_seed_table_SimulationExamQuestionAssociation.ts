import { Knex } from 'knex';

export async function seed(knex: Knex): Promise<void> {
  // -----------------------------------------------------
  // Deletes ALL existing entries
  await knex('SimulationExamQuestionAssociation').del();
  // Inserts seed entries
  await knex('SimulationExamQuestionAssociation').insert([
    {
      id: 1,
      Exam_id: 1,
      Question_id: 1,
      nameSimulated: 'Simulado 1 - Exame 1',
    },
    {
      id: 2,
      Exam_id: 1,
      Question_id: 2,
      nameSimulated: 'Simulado 2 - Exame 1',
    },
    {
      id: 3,
      Exam_id: 1,
      Question_id: 3,
      nameSimulated: 'Simulado 3 - Exame 1',
    },
    {
      id: 4,
      Exam_id: 1,
      Question_id: 4,
      nameSimulated: 'Simulado 4 - Exame 1',
    },
    {
      id: 5,
      Exam_id: 1,
      Question_id: 5,
      nameSimulated: 'Simulado 5 - Exame 1',
    },

    {
      id: 1,
      Exam_id: 2,
      Question_id: 1,
      nameSimulated: 'Simulado 1 - Exame 2',
    },
    {
      id: 2,
      Exam_id: 2,
      Question_id: 2,
      nameSimulated: 'Simulado 2 - Exame 2',
    },
    {
      id: 3,
      Exam_id: 2,
      Question_id: 3,
      nameSimulated: 'Simulado 3 - Exame 2',
    },
    {
      id: 4,
      Exam_id: 2,
      Question_id: 4,
      nameSimulated: 'Simulado 4 - Exame 2',
    },
    {
      id: 5,
      Exam_id: 2,
      Question_id: 5,
      nameSimulated: 'Simulado 5 - Exame 2',
    },

    {
      id: 1,
      Exam_id: 3,
      Question_id: 1,
      nameSimulated: 'Simulado 1 - Exame 3',
    },
    {
      id: 2,
      Exam_id: 3,
      Question_id: 2,
      nameSimulated: 'Simulado 2 - Exame 3',
    },
    {
      id: 3,
      Exam_id: 3,
      Question_id: 3,
      nameSimulated: 'Simulado 3 - Exame 3',
    },
    {
      id: 4,
      Exam_id: 3,
      Question_id: 4,
      nameSimulated: 'Simulado 4 - Exame 3',
    },
    {
      id: 5,
      Exam_id: 3,
      Question_id: 5,
      nameSimulated: 'Simulado 5 - Exame 3',
    },
  ]);
}
