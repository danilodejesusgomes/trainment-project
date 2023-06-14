import { QuestionAlternative } from '@model/interface/QuestionAlternative';
import {
  getQuestionAlternativeModel,
  listQuestionAlternativesModelByQuestionId,
} from '@model/QuestionAlternative';

export async function getQuestionAlternative(
  idQuestionAlternative: number
): Promise<QuestionAlternative> {
  const questionAlternative: QuestionAlternative =
    await getQuestionAlternativeModel(idQuestionAlternative);

  return questionAlternative;
}

export async function listQuestionAlternativesByQuestionId(
  idQuestion: number
): Promise<QuestionAlternative[]> {
  const questionAlternative: QuestionAlternative[] =
    await listQuestionAlternativesModelByQuestionId(idQuestion);

  return questionAlternative;
}
