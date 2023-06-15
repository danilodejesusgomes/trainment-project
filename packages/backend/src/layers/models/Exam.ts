import { ExamDb, getExamDb, listExamDb } from '@db/entityExam';
import { Exam, convertFromExamDb } from './interface/Exam';

export async function getExamModel(idExam: number): Promise<Exam> {
  const examDb: ExamDb = await getExamDb(idExam);

  const exam: Exam = convertFromExamDb(examDb);

  return exam;
}

export async function listExamModel(): Promise<Exam[]> {
  const arrayExamDb: ExamDb[] = await listExamDb();

  const arrayExam: Exam[] = arrayExamDb.map((examDb) =>
    convertFromExamDb(examDb)
  );

  return arrayExam;
}
