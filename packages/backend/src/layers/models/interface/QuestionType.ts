import { QuestionTypeDb } from '@db/entityQuestionType';

export interface QuestionType {
  id: number;
  name: string;
  quantityChoose: number;
}

export function convertFromQuestionTypeDb(
  questionTypeDb: QuestionTypeDb
): QuestionType {
  return {
    id: questionTypeDb.id,
    name: questionTypeDb.name,
    quantityChoose: questionTypeDb.quantityChoose,
  };
}
