import gql from 'graphql-tag';

const query = gql`
  type Query {
    Person(idPerson: ID!): Person
    Exam(idExam: ID!): Exam
    Question(idQuestion: ID!): Question
    QuestionType(idQuestionType: ID!): QuestionType
    QuestionSubject(idQuestionSubject: ID!): QuestionSubject
    QuestionAlternative(idQuestionAlternative: ID!): QuestionAlternative
    QuestionAlternatives(idQuestion: ID!): [QuestionAlternative!]
  }

  type Person {
    id: ID!
    name: String!
    email: String!
    password: String!
    token_validation_email: Int
    token_validation_email_expiration: String
    token_reset_password: Int
    token_reset_password_expiration: String
  }

  type Exam {
    id: ID!
    nameExam: String!
    descriptionExam: String!
    versionExam: String!
    timeDuration: String!
    quantityTotalQuestions: Int
  }

  type Question {
    id: ID!
    descriptionQuestion: String
    explicationQuestionResult: String
    QuestionSubject: QuestionSubject
    QuestionType: QuestionType
    QuestionAlternative: [QuestionAlternative!]
  }

  type QuestionSubject {
    id: ID!
    name: String!
  }

  type QuestionType {
    id: ID!
    name: String!
    quantityChoose: Int!
  }

  type QuestionAlternative {
    id: ID!
    Question_id: Int!
    description: String!
    rightAlternative: Boolean!
    explicationWhyResult: String!
  }
`;

export default query;
