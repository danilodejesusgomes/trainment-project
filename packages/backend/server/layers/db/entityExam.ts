import db_awsimulate from "../../../data-architecture/database";

export interface ExamDb {
  id: number;
  nameExam: string;
  descriptionExam: string;
  versionExam: string;
  timeDuration: string;
  quantityTotalQuestions: number;
};

const getExamTable  = () => db_awsimulate.table('Exam');

export async function getExam(
  idExam: number
  ): Promise<ExamDb> {
  const exam: ExamDb = await getExamTable()
    .first()
    .where({ id: idExam });
  
    console.log('Exam => ', exam);
  return exam;
}
