import { QuestionAlternativeDb } from '@db/entityQuestionAlternative';

export interface QuestionAlternative {
  id: number;
  Question_id: number;
  description: string;
  rightAlternative: boolean;
  explicationWhyResult: string;
}

export function convertFromQuestionAlternativeDb(
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
