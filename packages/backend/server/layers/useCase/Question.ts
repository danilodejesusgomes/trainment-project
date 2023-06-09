import { QuestionDb, getQuestionDb } from "../db/entityQuestion";
import { 
  QuestionAlternativeDb, 
  listQuestionAlternativeDbByQuestionId 
} from "../db/entityQuestionAlternative";
import { 
  QuestionSubjectDb, 
  getQuestionSubjectDb 
} from "../db/entityQuestionSubject";
import { QuestionTypeDb, getQuestionTypeDb } from "../db/entityQuestionType";


export interface Question {
  id: number;
  descriptionQuestion: string;
  explicationQuestionResult: string;
  QuestionSubject: () => Promise<QuestionSubjectDb>;
  QuestionType: () => Promise<QuestionTypeDb>;
  QuestionAlternative: () => Promise<QuestionAlternativeDb[]>;
};


export async function getQuestion(
  idQuestion: number
  ): Promise<Question> {
  
  console.log('idQuestion is searching => ', idQuestion)
  const questionDb: QuestionDb = await getQuestionDb(idQuestion)
  
  const question: Question = convertQuestionDbToQuestion(questionDb);

  return question;
};




function convertQuestionDbToQuestion(questionDb: QuestionDb): Question {
  return {
    id: questionDb.id,
    descriptionQuestion: questionDb.descriptionQuestion,
    explicationQuestionResult: questionDb.explicationQuestionResult,
    QuestionSubject: async () => await getQuestionSubjectDb(questionDb.QuestionSubject_id),
    QuestionType: async () => await getQuestionTypeDb(questionDb.QuestionType_id),
    QuestionAlternative: async () => await listQuestionAlternativeDbByQuestionId(questionDb.id),
  };
}