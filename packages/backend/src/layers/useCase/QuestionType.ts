import { QuestionTypeDb, getQuestionTypeDb } from '../db/entityQuestionType';

export interface QuestionType {
  id: number;
  name: string;
  quantityChoose: number;
}

export async function getQuestionType(
  idQuestionType: number
): Promise<QuestionType> {
  const questionTypeDb: QuestionTypeDb = await getQuestionTypeDb(
    idQuestionType
  );

  const questionType: QuestionType =
    convertQuestionTypeDbToQuestionType(questionTypeDb);
  return questionType;
}

function convertQuestionTypeDbToQuestionType(
  questionTypeDb: QuestionTypeDb
): QuestionType {
  return {
    id: questionTypeDb.id,
    name: questionTypeDb.name,
    quantityChoose: questionTypeDb.quantityChoose,
  };
}
