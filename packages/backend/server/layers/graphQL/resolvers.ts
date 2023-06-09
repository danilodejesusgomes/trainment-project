import { GraphQLError } from 'graphql';
import { getPerson } from './../db/entityPerson';
import { getExam } from './../db/entityExam';

export const resolvers = {
  Query: {
    person: async (_root: any, { id } : any ) => {
      const person = await getPerson(id);
      if (!person) {
        throw notFoundError('No Person found with id ' + id);
      }
      return person;
    },
    exam: async (_root: any, { id }: any) => {
      const exam = await getExam(id);
      if (!exam) {
        throw notFoundError('No Exam found with id ' + id);
      }
      return exam;
    },
  },
};

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