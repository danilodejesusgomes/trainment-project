import { describe, it, expect, beforeAll, afterAll } from 'vitest';
import { ExamDb, getExamDb, listExamDb } from './entityExam';
import db_awsimulate from '@database/index';

describe('entityExam', () => {
  beforeAll(async () => {
    // Connect to the database before running the tests
    console.log('========== entityExam:Started ==========');
  });

  afterAll(async () => {
    // Disconnect from the database after running the tests
    console.log('========== entityExam:Finished ==========');
  });

  describe('getExamDb', () => {
    it('should return an exam with the specified ID', async () => {
      console.log('========== getExamDb1:Started ==========');
      const examId = 1;
      const expectedExam: ExamDb = {
        id: examId,
        nameExam: 'AWS Certified Cloud Practitioner',
        descriptionExam: 'AWS Certified Cloud Practitioner Description ',
        versionExam: 'CLF-C01',
        timeDuration: '00:30:00',
        quantityTotalQuestions: 10,
      };

      const exam = await getExamDb(examId);

      expect(exam).toEqual(expectedExam);
      console.log('========== getExamDb1:Finished ==========');
    });

    it('should return undefined if the exam does not exist', async () => {
      console.log('========== getExamDb2:Started ==========');
      const examId = 999;

      const exam = await getExamDb(examId);

      expect(exam).toBeUndefined();
      console.log('========== getExamDb2:Finished ==========');
    });
  });

  describe('listExamDb', () => {
    it('should return a list of exams', async () => {
      console.log('========== listExamDb1:Started ==========');
      const expectedExams: ExamDb[] = [
        {
          id: 1,
          nameExam: 'AWS Certified Cloud Practitioner',
          descriptionExam: 'AWS Certified Cloud Practitioner Description ',
          versionExam: 'CLF-C01',
          timeDuration: '00:30:00',
          quantityTotalQuestions: 10,
        },
        {
          id: 2,
          nameExam: 'AWS Certified Solutions Architect Associate',
          descriptionExam:
            'AWS Certified Solutions Architect Associate Description ',
          versionExam: 'SAA-C03',
          timeDuration: '00:40:00',
          quantityTotalQuestions: 15,
        },
        {
          id: 3,
          nameExam: 'AWS Certified Solutions Architect Professional 2023',
          descriptionExam:
            'AWS Certified Solutions Architect Professional 2023 Description ',
          versionExam: 'SAP-C02',
          timeDuration: '00:50:00',
          quantityTotalQuestions: 20,
        },
      ];

      const exams = await listExamDb();

      expect(exams).toEqual(expectedExams);
      console.log('========== listExamDb1:Finished ==========');
    });
  });
});
