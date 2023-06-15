import db_awsimulate from '@database/index';

export interface ExamDb {
  id: number;
  nameExam: string;
  descriptionExam: string;
  versionExam: string;
  timeDuration: string;
  quantityTotalQuestions: number;
}

const getExamTable = () => db_awsimulate.table('Exam');

export async function getExamDb(idExam: number): Promise<ExamDb> {
  const exam: ExamDb = await getExamTable().first().where({ id: idExam });

  console.log('Exam => ', exam);
  return exam;
}

export async function listExamDb(): Promise<ExamDb[]> {
  const exam: ExamDb[] = await getExamTable().orderBy('id').limit(10);

  return exam;
}
