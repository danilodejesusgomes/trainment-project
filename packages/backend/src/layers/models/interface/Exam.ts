import { ExamDb } from '@db/entityExam';

export interface Exam {
  id: number;
  nameExam: string;
  descriptionExam: string;
  versionExam: string;
  timeDuration: string;
  quantityTotalQuestions: number;
}

export function convertFromExamDb(examDb: ExamDb): Exam {
  return {
    id: examDb.id,
    nameExam: examDb.nameExam,
    descriptionExam: examDb.descriptionExam,
    versionExam: examDb.versionExam,
    timeDuration: examDb.timeDuration,
    quantityTotalQuestions: examDb.quantityTotalQuestions,
  };
}
