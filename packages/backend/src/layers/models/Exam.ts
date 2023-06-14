import { ExamDb, getExamDb } from '@db/entityExam';
import { Exam, convertFromExamDb } from './interface/Exam';

export async function getExamModel(idExam: number): Promise<Exam> {
  const examDb: ExamDb = await getExamDb(idExam);

  const exam: Exam = convertFromExamDb(examDb);

  return exam;
}
