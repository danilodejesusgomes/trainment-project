import { Knex } from 'knex';

export async function seed(knex: Knex): Promise<void> {
  // -----------------------------------------------------
  // Deletes ALL existing entries
  await knex('Question').del();
  // Inserts seed entries
  await knex('Question').insert([
    {
      id: 1,
      descriptionQuestion:
        'Um Cloud Practitioner requer recuperação pontual (PITR) para uma tabela Amazon DynamoDB. Quem é responsável por configurar e executar backups?',
      explicationQuestionResult:
        'A recuperação pontual (PITR) fornece backups contínuos dos dados da tabela do DynamoDB. Quando ativado, o DynamoDB mantém backups incrementais de sua tabela pelos últimos 35 dias até que você o desative explicitamente. É responsabilidade do cliente ativar o PITR e a AWS é responsável por realmente realizar os backups.',
      QuestionSubject_id: 1,
      QuestionType_id: 1,
    },
    {
      id: 2,
      descriptionQuestion:
        'Os clientes que usam os serviços da AWS devem corrigir os sistemas operacionais em quais dos seguintes serviços?',
      explicationQuestionResult:
        'Amazon EC2 é uma solução de infraestrutura como serviço (IaaS). Isso significa que a camada de hardware e software subjacente para executar um servidor virtual é gerenciada para você. Como cliente, você deve gerenciar o sistema operacional e qualquer software instalado. Isso inclui a instalação de patches no sistema operacional como parte das atividades de manutenção regulares.',
      QuestionSubject_id: 1,
      QuestionType_id: 2,
    },
    {
      id: 3,
      descriptionQuestion:
        'Quais benefícios uma empresa pode obter implantando um banco de dados relacional no Amazon RDS em vez do Amazon EC2? (Selecione DOIS.)',
      explicationQuestionResult:
        'Dois dos benefícios de usar um serviço Amazon RDS gerenciado em vez de um banco de dados auto gerenciado no EC2 são que você obtém backups automatizados e patching automático de software.',
      QuestionSubject_id: 1,
      QuestionType_id: 2,
    },
    {
      id: 4,
      descriptionQuestion:
        'Um aplicativo usa um banco de dados PostgreSQL em execução em uma única instância do Amazon EC2. Um Cloud Practitioner foi solicitado a aumentar a disponibilidade do banco de dados para que haja recuperação automática em caso de falha. Quais tarefas o Cloud Practitioner pode realizar para atender a esse requisito?',
      explicationQuestionResult:
        'Mover o banco de dados para o Amazon RDS significa que o banco de dados pode aproveitar as vantagens do recurso Multi-AZ integrado. Este recurso cria uma instância em espera em outra Zona de disponibilidade e replica de forma síncrona para ela. No caso de uma falha que afete o banco de dados principal, um failover automático pode ocorrer e o banco de dados se tornará funcional na instância de espera.',
      QuestionSubject_id: 1,
      QuestionType_id: 2,
    },
    {
      id: 5,
      descriptionQuestion:
        'Quais vantagens um administrador de banco de dados obtém usando o Amazon Relational Database Service (RDS)?',
      explicationQuestionResult:
        'Amazon RDS é um serviço de banco de dados relacional gerenciado no qual você pode executar vários tipos de software de banco de dados. O serviço é gerenciado para reduzir as tarefas de administração de banco de dados que um administrador normalmente realizaria. O serviço gerenciado inclui provisionamento de hardware, configuração de banco de dados, patching e backups.',
      QuestionSubject_id: 1,
      QuestionType_id: 2,
    },
  ]);
}
