import { QuestionSubject } from '@model/interface/QuestionSubject';
import { getQuestionSubjectModel } from '@model/QuestionSubject';

export async function getQuestionSubject(
  idQuestionSubject: number
): Promise<QuestionSubject> {
  const questionSubject: QuestionSubject = await getQuestionSubjectModel(
    idQuestionSubject
  );

  return questionSubject;
}
