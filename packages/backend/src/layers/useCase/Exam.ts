import { Exam } from '@model/interface/Exam';
import { getExamModel, listExamModel } from '@model/Exam';

export async function getExam(idExam: number): Promise<Exam> {
  const exam: Exam = await getExamModel(idExam);

  return exam;
}

export async function listExams(): Promise<Exam[]> {
  const arrayExam: Exam[] = await listExamModel();

  return arrayExam;
}
