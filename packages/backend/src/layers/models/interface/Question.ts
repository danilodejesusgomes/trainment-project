import { QuestionDb } from '@db/entityQuestion';
import {
  QuestionAlternativeDb,
  listQuestionAlternativeDbByQuestionId,
} from '@db/entityQuestionAlternative';
import {
  QuestionSubjectDb,
  getQuestionSubjectDb,
} from '@db/entityQuestionSubject';
import { QuestionTypeDb, getQuestionTypeDb } from '@db/entityQuestionType';

export interface Question {
  id: number;
  descriptionQuestion: string;
  explicationQuestionResult: string;
  QuestionSubject: () => Promise<QuestionSubjectDb>;
  QuestionType: () => Promise<QuestionTypeDb>;
  QuestionAlternative: () => Promise<QuestionAlternativeDb[]>;
}

export function convertFromQuestionDb(questionDb: QuestionDb): Question {
  return {
    id: questionDb.id,
    descriptionQuestion: questionDb.descriptionQuestion,
    explicationQuestionResult: questionDb.explicationQuestionResult,
    QuestionSubject: async () =>
      getQuestionSubjectDb(questionDb.QuestionSubject_id),
    QuestionType: async () => getQuestionTypeDb(questionDb.QuestionType_id),
    QuestionAlternative: async () =>
      listQuestionAlternativeDbByQuestionId(questionDb.id),
  };
}
