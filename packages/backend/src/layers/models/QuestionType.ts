import { QuestionTypeDb, getQuestionTypeDb } from '@db/entityQuestionType';
import {
  QuestionType,
  convertFromQuestionTypeDb,
} from './interface/QuestionType';

export async function getQuestionTypeModel(
  idQuestionType: number
): Promise<QuestionType> {
  const questionTypeDb: QuestionTypeDb = await getQuestionTypeDb(
    idQuestionType
  );

  const questionType: QuestionType = convertFromQuestionTypeDb(questionTypeDb);
  return questionType;
}
