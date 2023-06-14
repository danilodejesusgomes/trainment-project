import { QuestionType } from '@model/interface/QuestionType';
import { getQuestionTypeModel } from '@model/QuestionType';

export async function getQuestionType(
  idQuestionType: number
): Promise<QuestionType> {
  const questionType: QuestionType = await getQuestionTypeModel(idQuestionType);

  return questionType;
}
