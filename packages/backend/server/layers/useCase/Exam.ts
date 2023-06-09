import { ExamDb, getExamDb } from "../db/entityExam";

export interface Exam {
  id: number;
  nameExam: string;
  descriptionExam: string;
  versionExam: string;
  timeDuration: string;
  quantityTotalQuestions: number;
};


export async function getExam(
  idExam: number
  ): Promise<Exam> {
  const examDb: ExamDb = await getExamDb(idExam)
  
  const exam: Exam = convertExamDbToExam(examDb);

  return exam;
};


function convertExamDbToExam(examDb: ExamDb): Exam {
  return {
    id: examDb.id,
    nameExam: examDb.nameExam,
    descriptionExam: examDb.descriptionExam,
    versionExam: examDb.versionExam,
    timeDuration: examDb.timeDuration,
    quantityTotalQuestions: examDb.quantityTotalQuestions,
  };
}