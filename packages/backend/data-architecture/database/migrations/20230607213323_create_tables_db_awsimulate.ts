import { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
  return knex.schema

  // -----------------------------------------------------
  // Table `db_awsimulate`.`Person`
  // -----------------------------------------------------
  .createTable('Person', function(table) {
    table.integer('id').notNullable();
    table.string('name', 100).notNullable();
    table.string('email', 256).notNullable().unique();

    table.primary(['id']);
  })
  // -----------------------------------------------------
  // Table `db_awsimulate`.`Exam`
  // -----------------------------------------------------
  .createTable('Exam', function(table) {
    table.integer('id')
      .notNullable();
    table.string('nameExam', 256)
      .notNullable();
    table.string('descriptionExam', 1000)
      .notNullable();
    table.string('versionExam', 45);
    table.time('timeDuration')
      .notNullable();
    table.integer('quantityTotalQuestions')
      .notNullable();

    table.primary(['id']);
  })

  // -----------------------------------------------------
  // Table `db_awsimulate`.`QuestionSubject`
  // -----------------------------------------------------
  .createTable('QuestionSubject', function(table) {
    table.integer('id')
      .notNullable();
    table.string('name', 100)
      .notNullable();

    table.primary(['id']);
  })

  // -----------------------------------------------------
  // Table `db_awsimulate`.`QuestionType`
  // -----------------------------------------------------
  .createTable('QuestionType', function(table) {
    table.integer('id').notNullable();
    table.string('name', 45).notNullable();
    table.integer('quantityChoose').notNullable();

    table.primary(['id']);
  })

  // -----------------------------------------------------
  // Table `db_awsimulate`.`Question`
  // -----------------------------------------------------
  .createTable('Question', function(table) {
    table.integer('id').notNullable();
    table.string('descriptionQuestion', 1000).notNullable();
    table.string('explicationQuestionResult', 1000).notNullable();
    table.integer('QuestionSubject_id')
      .notNullable()
      .references('id').inTable('QuestionSubject')
        .onDelete('CASCADE')
        .onUpdate('CASCADE');
    table.integer('QuestionType_id')
      .notNullable()
      .references('id').inTable('QuestionType')
        .onDelete('CASCADE')
        .onUpdate('CASCADE');

    table.primary(['id']);
  })

  // -----------------------------------------------------
  // Table `db_awsimulate`.`QuestionAlternative`
  // -----------------------------------------------------
  .createTable('QuestionAlternative', function(table) {
    table.integer('idQuestionAlternative')
      .notNullable();
    table.integer('Question_id')
      .notNullable()
      .references('id').inTable('Question')
        .onDelete('CASCADE')
        .onUpdate('CASCADE');
    table.string('description', 1000).notNullable();
    table.tinyint('rightAlternative').notNullable();
    table.string('explicationWhyResult', 1000).notNullable();

    table.primary(['idQuestionAlternative', 'Question_id']);
  })

  // -----------------------------------------------------
  // Table `db_awsimulate`.`SimulationExamQuestionAssociation`
  // -----------------------------------------------------
  .createTable('SimulationExamQuestionAssociation', function(table) {
    table.integer('id').notNullable();
    table.integer('Exam_id').notNullable()
      .references('id').inTable('Exam')
        .onDelete('CASCADE')
        .onUpdate('CASCADE');
    table.integer('Question_id').notNullable()
      .references('id').inTable('Question')
        .onDelete('CASCADE')
        .onUpdate('CASCADE');
    table.string('nameSimulated', 100).notNullable();

    table.primary(['id', 'Exam_id', 'Question_id']);
  })

  // -----------------------------------------------------
  // Table `db_awsimulate`.`ExamQuestionAssociation`
  // -----------------------------------------------------
  .createTable('ExamQuestionAssociation', function(table) {
    table.integer('Exam_id')
      .notNullable()
      .references('id').inTable('Exam')
        .onDelete('CASCADE')
        .onUpdate('CASCADE');
    table.integer('Question_id')
      .notNullable()
      .references('id').inTable('Question')
        .onDelete('CASCADE')
        .onUpdate('CASCADE');

    table.primary(['Exam_id', 'Question_id']);
  })

  // -----------------------------------------------------
  // Table `db_awsimulate`.`PracticeExamHistoric`
  // -----------------------------------------------------
  .createTable('PracticeExamHistoric', function(table) {
    table.integer('id').notNullable();
    table.integer('Person_id')
      .notNullable()
      .references('id').inTable('Person')
        .onDelete('CASCADE')
        .onUpdate('CASCADE')
    table.integer('Simulation_id')
      .notNullable()
      .references('id').inTable('SimulationExamQuestionAssociation')
        .onDelete('CASCADE')
        .onUpdate('CASCADE')
    table.integer('Exam_id')
      .notNullable()
      .references('Exam_id').inTable('SimulationExamQuestionAssociation')
        .onDelete('CASCADE')
        .onUpdate('CASCADE')
    table.datetime('datetimeGetStarted').notNullable();
    table.datetime('datetimeFinished');
    table.decimal('percentScore', 5, 2);
    table.string('timeSpent', 45);
    table.integer('numberCorrectQuestions');

    table.primary(['id', 'Person_id', 'Simulation_id', 'Exam_id', 'datetimeGetStarted']);
  })

  // -----------------------------------------------------
  // Table `db_awsimulate`.`QuestionAlternativeSelected`
  // -----------------------------------------------------
  .createTable('QuestionAlternativeSelected', function(table) {
    table.integer('PracticeExamHistoric_id')
      .notNullable()
      .references('id').inTable('PracticeExamHistoric')
        .onDelete('CASCADE')
        .onUpdate('CASCADE');
    table.integer('Person_id')
      .notNullable()
      .references('Person_id').inTable('PracticeExamHistoric')
        .onDelete('CASCADE')
        .onUpdate('CASCADE');
    table.integer('Simulation_id')
      .notNullable()
      .references('Simulation_id').inTable('PracticeExamHistoric')
        .onDelete('CASCADE')
        .onUpdate('CASCADE');
    table.integer('Exam_id')
      .notNullable()
      .references('Exam_id').inTable('PracticeExamHistoric')
        .onDelete('CASCADE')
        .onUpdate('CASCADE');
    table.integer('Question_id')
      .notNullable()
      .references('Question_id').inTable('SimulationExamQuestionAssociation')
        .onDelete('CASCADE')
        .onUpdate('CASCADE');

    table.primary(['PracticeExamHistoric_id', 'Person_id', 'Simulation_id', 'Exam_id', 'Question_id']);
  });
}


export async function down(knex: Knex): Promise<void> {
  return knex.schema
  .dropTable('QuestionAlternativeSelected')
  .dropTable('PracticeExamHistoric')
  .dropTable('ExamQuestionAssociation')
  .dropTable('SimulationExamQuestionAssociation')
  .dropTable('QuestionAlternative')
  .dropTable('Question')
  .dropTable('QuestionType')
  .dropTable('QuestionSubject')
  .dropTable('Exam')
  .dropTable('Person');
}

