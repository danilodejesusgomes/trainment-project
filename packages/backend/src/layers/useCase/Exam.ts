import { Exam } from '@model/interface/Exam';
import { getExamModel } from '@model/Exam';

export async function getExam(idExam: number): Promise<Exam> {
  const exam: Exam = await getExamModel(idExam);

  return exam;
}
