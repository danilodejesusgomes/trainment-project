import db_awsimulate from '../../../data-architecture/database';

export interface QuestionSubjectDb {
  id: number;
  name: string;
}

const getQuestionSubjectTable = () => db_awsimulate.table('QuestionSubject');

export async function getQuestionSubjectDb(
  idQuestionSubject: number
): Promise<QuestionSubjectDb> {
  const questionSubject: QuestionSubjectDb = await getQuestionSubjectTable()
    .first()
    .where({ id: idQuestionSubject });

  console.log('QuestionSubject => ', questionSubject);
  return questionSubject;
}
