import { getQuestionModel } from '@model/Question';
import { Question } from '@model/interface/Question';

export async function getQuestion(idQuestion: number): Promise<Question> {
  const question: Question = await getQuestionModel(idQuestion);

  return question;
}
