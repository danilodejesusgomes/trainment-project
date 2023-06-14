import { QuestionDb, getQuestionDb } from '@db/entityQuestion';
import { Question, convertFromQuestionDb } from './interface/Question';

export async function getQuestionModel(idQuestion: number): Promise<Question> {
  console.log('idQuestion is searching => ', idQuestion);
  const questionDb: QuestionDb = await getQuestionDb(idQuestion);

  const question: Question = convertFromQuestionDb(questionDb);

  return question;
}
