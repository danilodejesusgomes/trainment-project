import { Knex } from 'knex';

export async function seed(knex: Knex): Promise<void> {
  // -----------------------------------------------------
  // Deletes ALL existing entries
  await knex('QuestionAlternative').del();
  // Inserts seed entries
  await knex('QuestionAlternative').insert([
    // -----------------------------------------------------
    // Question 1 - Alternatives
    // -----------------------------------------------------
    {
      id: 1,
      Question_id: 1,
      rightAlternative: true,
      description:
        'O cliente é responsável pela configuração e a AWS é responsável por fazer backups.',
      explicationWhyResult:
        'O cliente é responsável pela configuração e a AWS é responsável por fazer backups, é a resposta correta.',
    },
    {
      id: 2,
      Question_id: 1,
      rightAlternative: false,
      description:
        'AWS é responsável pela configuração e o usuário é responsável por fazer backups.',
      explicationWhyResult:
        'AWS é responsável pela configuração e o usuário é responsável por fazer backups, está incorreto. Isso ocorre ao contrário, os usuários são responsáveis pela configuração e a AWS é responsável por realizar backups.',
    },
    {
      id: 3,
      Question_id: 1,
      rightAlternative: false,
      description: 'AWS é responsável por ambas as tarefas.',
      explicationWhyResult:
        'AWS é responsável por ambas as tarefas, está incorreto. Isso não é verdade, pois os usuários devem configurar o PITR.',
    },
    {
      id: 4,
      Question_id: 1,
      rightAlternative: false,
      description: 'O cliente é responsável por ambas as tarefas.',
      explicationWhyResult:
        'O cliente é responsável por ambas as tarefas, está incorreto. Isso não é verdade, a AWS realiza os backups.',
    },

    // -----------------------------------------------------
    // Question 2 - Alternatives
    // -----------------------------------------------------
    {
      id: 1,
      Question_id: 2,
      rightAlternative: true,
      description: 'Amazon EC2.',
      explicationWhyResult: 'CORRECT: "Amazon EC2" é a resposta correta',
    },
    {
      id: 2,
      Question_id: 2,
      rightAlternative: false,
      description: 'AWS Lambda.',
      explicationWhyResult:
        'INCORRECT: "AWS Lambda" está incorreto. Este é um serviço sem servidor e você não precisa gerenciar patches.',
    },
    {
      id: 3,
      Question_id: 2,
      rightAlternative: false,
      description: 'AWS Fargate.',
      explicationWhyResult:
        'INCORRECT: "AWS Fargate" está incorreto. Este é um serviço sem servidor e você não precisa gerenciar patches.',
    },
    {
      id: 4,
      Question_id: 2,
      rightAlternative: false,
      description: 'Amazon DynamoDB.',
      explicationWhyResult:
        'INCORRECT: "Amazon DynamoDB" está incorreto. Este é um serviço sem servidor e você não precisa gerenciar patches.',
    },

    // -----------------------------------------------------
    // Question 3 - Alternatives
    // -----------------------------------------------------
    {
      id: 1,
      Question_id: 3,
      rightAlternative: true,
      description: 'Backups automatizados.',
      explicationWhyResult:
        'CORRECT: "Backups automatizados" é uma resposta correta.',
    },
    {
      id: 2,
      Question_id: 3,
      rightAlternative: true,
      description: 'Patch de software.',
      explicationWhyResult:
        'CORRECT: "Patch de software" também é uma resposta correta.',
    },
    {
      id: 3,
      Question_id: 3,
      rightAlternative: false,
      description: 'Gerenciamento de esquema.',
      explicationWhyResult:
        'INCORRECT: "Gerenciamento de esquema" está incorreto. Este não é um recurso do serviço gerenciado.',
    },
    {
      id: 4,
      Question_id: 3,
      rightAlternative: false,
      description: 'Indexação de tabelas.',
      explicationWhyResult:
        'INCORRECT: "Indexação de tabelas" está incorreto. Este não é um recurso do serviço gerenciado.',
    },
    {
      id: 5,
      Question_id: 3,
      rightAlternative: false,
      description: 'Acesso root ao sistema operacional.',
      explicationWhyResult:
        'INCORRECT: "Acesso root ao sistema operacional" está incorreto. Você não obtém acesso root ao sistema operacional de uma instância RDS.',
    },

    // -----------------------------------------------------
    // Question 4 - Alternatives
    // -----------------------------------------------------
    {
      id: 1,
      Question_id: 4,
      rightAlternative: true,
      description:
        'Migrar o banco de dados para o Amazon RDS e habilitar o recurso Multi-AZ.',
      explicationWhyResult:
        'CORRECT: "Migrar o banco de dados para o Amazon RDS e habilitar o recurso Multi-AZ" é a resposta correta.',
    },
    {
      id: 2,
      Question_id: 4,
      rightAlternative: false,
      description:
        'Configurar um Elastic Load Balancer na frente da instância EC2.',
      explicationWhyResult:
        'INCORRECT: "Configurar um Elastic Load Balancer na frente da instância EC2" está incorreto. Você não pode usar um ELB para distribuir o tráfego para um banco de dados e com uma única instância não há nenhum benefício aqui.',
    },
    {
      id: 3,
      Question_id: 4,
      rightAlternative: false,
      description:
        'Configurar recuperação automática do EC2 para mover a instância para outra região.',
      explicationWhyResult:
        'INCORRECT: "Configurar recuperação automática do EC2 para mover a instância para outra região" está incorreto. O recurso de recuperação automática do EC2 move automaticamente a instância para outro host, não para outra região.',
    },
    {
      id: 4,
      Question_id: 4,
      rightAlternative: false,
      description:
        'Defina o valor DeleteOnTermination como falso para o volume raiz do EBS.',
      explicationWhyResult:
        'INCORRECT: "Defina o valor DeleteOnTermination como falso para o volume raiz do EBS" está incorreto. Isso simplesmente preservará o volume da raiz; não irá realizar recuperação automática',
    },

    // -----------------------------------------------------
    // Question 5 - Alternatives
    // -----------------------------------------------------
    {
      id: 1,
      Question_id: 5,
      rightAlternative: true,
      description:
        'RDS simplifica as tarefas de administração de banco de dados relacional.',
      explicationWhyResult:
        'CORRECT: "RDS simplifica as tarefas de administração de banco de dados relacional" é a resposta correta.',
    },
    {
      id: 2,
      Question_id: 5,
      rightAlternative: false,
      description:
        'Os bancos de dados RDS são dimensionados automaticamente com base na carga.',
      explicationWhyResult:
        'INCORRECT: "Os bancos de dados RDS são dimensionados automaticamente com base na carga" está incorreto. Isso não é verdade, o escalonamento automático de armazenamento é possível, mas para computação, ele escalona alterando o tipo de instância (manual).',
    },
    {
      id: 3,
      Question_id: 5,
      rightAlternative: false,
      description:
        'RDS fornece 99,99999999999% de confiabilidade e durabilidade.',
      explicationWhyResult:
        'INCORRECT: "RDS fornece 99,99999999999% de confiabilidade e durabilidade" está incorreto. Isso não é verdade no Amazon RDS.',
    },
    {
      id: 4,
      Question_id: 5,
      rightAlternative: false,
      description:
        'RDS permite que os usuários ajustem dinamicamente os recursos de CPU e RAM.',
      explicationWhyResult:
        'INCORRECT: RDS permite que os usuários ajustem dinamicamente os recursos de CPU e RAM" está incorreto. Você não pode ajustar CPU e RAM dinamicamente, você deve alterar o tipo de instância e reinicializar a instância do banco de dados.',
    },
  ]);
}
