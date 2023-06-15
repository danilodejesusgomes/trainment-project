import db_awsimulate from '@database/index';

export interface QuestionAlternativeDb {
  id: number;
  Question_id: number;
  description: string;
  rightAlternative: boolean;
  explicationWhyResult: string;
}

const getQuestionAlternativeTable = () =>
  db_awsimulate.table('QuestionAlternative');

export async function getQuestionAlternativeDb(
  idQuestionAlternative: number
): Promise<QuestionAlternativeDb> {
  const questionAlternative: QuestionAlternativeDb =
    await getQuestionAlternativeTable()
      .first()
      .where({ id: idQuestionAlternative });

  console.log('QuestionAlternative => ', questionAlternative);
  return questionAlternative;
}

export async function listQuestionAlternativeDbByQuestionId(
  idQuestion: number
): Promise<QuestionAlternativeDb[]> {
  const questionAlternative: QuestionAlternativeDb[] =
    await getQuestionAlternativeTable()
      .limit(10)
      .where({ Question_id: idQuestion });

  console.log('QuestionAlternative[] => ', questionAlternative);
  return questionAlternative;
}
