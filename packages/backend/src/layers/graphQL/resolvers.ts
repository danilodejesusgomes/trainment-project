import { GraphQLError } from 'graphql';
import { getQuestion } from '../useCase/Question';
import { getPerson } from '../useCase/Person';
import { getExam } from '../useCase/Exam';
import { getQuestionType } from '../useCase/QuestionType';
import { getQuestionSubject } from '../useCase/QuestionSubject';
import {
  getQuestionAlternative,
  listQuestionAlternativesByQuestionId,
} from '../useCase/QuestionAlternative';

function notFoundError(message: string) {
  return new GraphQLError(message, {
    extensions: { code: 'NOT_FOUND' },
  });
}

function unauthorizedError(message: string) {
  return new GraphQLError(message, {
    extensions: { code: 'UNAUTHORIZED' },
  });
}

export const resolvers = {
  Query: {
    Person: async (_root: any, { idPerson }: any) => {
      const person = await getPerson(idPerson);
      if (!person) {
        throw notFoundError('No Person found with id ' + idPerson);
      }
      return person;
    },
    Exam: async (_root: any, { idExam }: any) => {
      const exam = await getExam(idExam);
      if (!exam) {
        throw notFoundError('No Exam found with id ' + idExam);
      }
      return exam;
    },

    Question: async (_root: any, { idQuestion }: any) => {
      const question = await getQuestion(idQuestion);
      if (!question) {
        throw notFoundError('No Question found with id ' + idQuestion);
      }

      return question;
    },

    QuestionType: async (_root: any, { idQuestionType }: any) => {
      const questionType = await getQuestionType(idQuestionType);
      if (!questionType) {
        throw notFoundError('No QuestionType found with id ' + idQuestionType);
      }
      return questionType;
    },

    QuestionSubject: async (_root: any, { idQuestionSubject }: any) => {
      const questionSubject = await getQuestionSubject(idQuestionSubject);
      if (!questionSubject) {
        throw notFoundError(
          'No QuestionSubject found with id ' + idQuestionSubject
        );
      }
      return questionSubject;
    },

    QuestionAlternative: async (_root: any, { idQuestionAlternative }: any) => {
      const questionAlternative = await getQuestionAlternative(
        idQuestionAlternative
      );
      if (!questionAlternative) {
        throw notFoundError(
          'No QuestionAlternative found with id ' + idQuestionAlternative
        );
      }
      return questionAlternative;
    },

    QuestionAlternatives: async (_root: any, { idQuestion }: any) => {
      const questionAlternative = await listQuestionAlternativesByQuestionId(
        idQuestion
      );
      if (!questionAlternative) {
        throw notFoundError(
          'No QuestionAlternative found with id ' + idQuestion
        );
      }
      return questionAlternative;
    },
  },
};
