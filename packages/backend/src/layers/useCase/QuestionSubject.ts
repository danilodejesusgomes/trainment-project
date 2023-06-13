import {
  QuestionSubjectDb,
  getQuestionSubjectDb,
} from '../db/entityQuestionSubject';

export interface QuestionSubject {
  id: number;
  name: string;
}

export async function getQuestionSubject(
  idQuestionSubject: number
): Promise<QuestionSubject> {
  const questionSubjectDb: QuestionSubjectDb = await getQuestionSubjectDb(
    idQuestionSubject
  );

  const questionSubject: QuestionSubject =
    convertQuestionSubjectDbToQuestionSubject(questionSubjectDb);

  return questionSubject;
}

function convertQuestionSubjectDbToQuestionSubject(
  questionSubjectDb: QuestionSubjectDb
): QuestionSubject {
  return {
    id: questionSubjectDb.id,
    name: questionSubjectDb.name,
  };
}
