import db_awsimulate from '@database/index';

export interface QuestionTypeDb {
  id: number;
  name: string;
  quantityChoose: number;
}

const getQuestionTypeTable = () => db_awsimulate.table('QuestionType');

export async function getQuestionTypeDb(
  idQuestionType: number
): Promise<QuestionTypeDb> {
  const questionType: QuestionTypeDb = await getQuestionTypeTable()
    .first()
    .where({ id: idQuestionType });

  console.log('QuestionType => ', questionType);
  return questionType;
}
