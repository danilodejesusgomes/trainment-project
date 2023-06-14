import {
  QuestionSubjectDb,
  getQuestionSubjectDb,
} from '@db/entityQuestionSubject';
import {
  QuestionSubject,
  convertFromQuestionSubjectDb,
} from './interface/QuestionSubject';

export async function getQuestionSubjectModel(
  idQuestionSubject: number
): Promise<QuestionSubject> {
  const questionSubjectDb: QuestionSubjectDb = await getQuestionSubjectDb(
    idQuestionSubject
  );

  const questionSubject: QuestionSubject =
    convertFromQuestionSubjectDb(questionSubjectDb);

  return questionSubject;
}
