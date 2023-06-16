import { GraphQLClient, gql } from 'graphql-request';

const client = new GraphQLClient('http://localhost:4000/graphql');

export async function listExams() {
  const query = gql`
    query {
      listExams {
        id
        nameExam
        descriptionExam
        versionExam
        timeDuration
        quantityTotalQuestions
      }
    }
  `;
  const data = await client.request(query);
  return data;
}
