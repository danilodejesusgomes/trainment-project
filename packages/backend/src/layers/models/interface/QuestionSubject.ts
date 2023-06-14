import { QuestionSubjectDb } from '@db/entityQuestionSubject';

export interface QuestionSubject {
  id: number;
  name: string;
}

export function convertFromQuestionSubjectDb(
  questionSubjectDb: QuestionSubjectDb
): QuestionSubject {
  return {
    id: questionSubjectDb.id,
    name: questionSubjectDb.name,
  };
}
