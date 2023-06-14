import {
  QuestionAlternativeDb,
  getQuestionAlternativeDb,
  listQuestionAlternativeDbByQuestionId,
} from '@db/entityQuestionAlternative';
import {
  QuestionAlternative,
  convertFromQuestionAlternativeDb,
} from './interface/QuestionAlternative';

export async function getQuestionAlternativeModel(
  idQuestionAlternative: number
): Promise<QuestionAlternative> {
  const questionAlternativeDb: QuestionAlternativeDb =
    await getQuestionAlternativeDb(idQuestionAlternative);

  const questionAlternative: QuestionAlternative =
    convertFromQuestionAlternativeDb(questionAlternativeDb);

  return questionAlternative;
}

export async function listQuestionAlternativesModelByQuestionId(
  idQuestion: number
): Promise<QuestionAlternative[]> {
  const listQuestionAlternativeDb: QuestionAlternativeDb[] =
    await listQuestionAlternativeDbByQuestionId(idQuestion);

  const questionAlternative: QuestionAlternative[] =
    listQuestionAlternativeDb.map((questionAlternativeDb) => {
      return convertFromQuestionAlternativeDb(questionAlternativeDb);
    });

  return questionAlternative;
}
