import {
  QuestionAlternativeDb,
  getQuestionAlternativeDb,
  listQuestionAlternativeDbByQuestionId,
} from '../db/entityQuestionAlternative';

export interface QuestionAlternative {
  id: number;
  Question_id: number;
  description: string;
  rightAlternative: boolean;
  explicationWhyResult: string;
}

export async function getQuestionAlternative(
  idQuestionAlternative: number
): Promise<QuestionAlternative> {
  const questionAlternativeDb: QuestionAlternativeDb =
    await getQuestionAlternativeDb(idQuestionAlternative);

  const questionAlternative: QuestionAlternative =
    convertQuestionAlternativeDbToQuestionAlternative(questionAlternativeDb);

  return questionAlternative;
}

export async function listQuestionAlternativesByQuestionId(
  idQuestion: number
): Promise<QuestionAlternative[]> {
  const questionAlternativeDb: QuestionAlternativeDb[] =
    await listQuestionAlternativeDbByQuestionId(idQuestion);

  const questionAlternative: QuestionAlternative[] = questionAlternativeDb.map(
    (questionAlternativeDb) => {
      return convertQuestionAlternativeDbToQuestionAlternative(
        questionAlternativeDb
      );
    }
  );

  return questionAlternative;
}

function convertQuestionAlternativeDbToQuestionAlternative(
  questionAlternativeDb: QuestionAlternativeDb
): QuestionAlternative {
  return {
    id: questionAlternativeDb.id,
    Question_id: questionAlternativeDb.Question_id,
    description: questionAlternativeDb.description,
    rightAlternative: questionAlternativeDb.rightAlternative,
    explicationWhyResult: questionAlternativeDb.explicationWhyResult,
  };
}
