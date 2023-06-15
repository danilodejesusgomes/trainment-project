import { Knex } from 'knex';

export async function seed(knex: Knex): Promise<void> {
  // -----------------------------------------------------
  // Deletes ALL existing entries
  await knex('ExamQuestionAssociation').del();
  // Inserts seed entries
  await knex('ExamQuestionAssociation').insert([
    { Exam_id: 1, Question_id: 1 },
    { Exam_id: 1, Question_id: 2 },
    { Exam_id: 1, Question_id: 3 },
    { Exam_id: 1, Question_id: 4 },
    { Exam_id: 1, Question_id: 5 },
    { Exam_id: 2, Question_id: 1 },
    { Exam_id: 2, Question_id: 2 },
    { Exam_id: 2, Question_id: 3 },
    { Exam_id: 2, Question_id: 4 },
    { Exam_id: 2, Question_id: 5 },
    { Exam_id: 3, Question_id: 1 },
    { Exam_id: 3, Question_id: 2 },
    { Exam_id: 3, Question_id: 3 },
    { Exam_id: 3, Question_id: 4 },
    { Exam_id: 3, Question_id: 5 },
  ]);
}
