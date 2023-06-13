import db_awsimulate from '../../../data-architecture/database';

export interface QuestionDb {
  id: number;
  descriptionQuestion: string;
  explicationQuestionResult: string;
  QuestionSubject_id: number;
  QuestionType_id: number;
}

const getQuestionTable = () => db_awsimulate.table('Question');

export async function getQuestionDb(idQuestion: number): Promise<QuestionDb> {
  console.log('idQuestion is searching => ', idQuestion);
  const question: QuestionDb = await getQuestionTable()
    .first()
    .where({ id: idQuestion });

  console.log('Question => ', question);
  return question;
}
