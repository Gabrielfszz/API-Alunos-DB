/* 
Desenvolvido para a matéria de Typescript, pelos alunos:

Gabriel Filipe dos Santos RA: 2517645
Italo Guilherme Pinheiro Rodrigues RA: 2526314
Pedro Henrique Assis de Oliveira RA: 2508585
Matheus Gomes Nagy RA: 2508094
Joaquim da Silva dos Santos RA:2502410
*/

const { Pool } = require('pg');
const readlineSync = require('readline-sync');

// Nunca use senha e usuario nos códigos - este é apenas um exemplo de aulas
// No mundo real isso é uma baita vulnerabilidade
const dbConfig = {
    user: 'aluno',
    host: 'localhost',
    database: 'db_profedu',
    password: '102030',
    port: 5432,
};

const pool = new Pool(dbConfig);

async function inserirDados() {
    console.log("--- Registro de Médias Alunos ---");

    const nome = readlineSync.question('Digite o nome do Aluno: ');
    const serie = readlineSync.questionInt('Digite a Serie do Aluno: ');
    const idade = readlineSync.questionInt('Digite a idade do Aluno: ');

    let P1Mat: number;
    do {
        P1Mat = readlineSync.questionInt('Digite a nota da Prova 1 de Matematica (0 - 10): ');
        if (P1Mat < 0 || P1Mat > 10) {
            console.error('Erro: A nota deve ser entre 0 e 10. Tente novamente.');
        }
    } while (P1Mat < 0 || P1Mat > 10);

    let P2Mat: number;
    do {
        P2Mat = readlineSync.questionInt('Digite a nota da Prova 2 de Matematica (0 - 10): ');
        if (P2Mat < 0 || P2Mat > 10) {
            console.error('Erro: A nota deve ser entre 0 e 10. Tente novamente.');
        }
    } while (P2Mat < 0 || P2Mat > 10);

    let P3Mat: number;
    do {
        P3Mat = readlineSync.questionInt('Digite a nota da Prova 3 de Matematica (0 - 10): ');
        if (P3Mat < 0 || P3Mat > 10) {
            console.error('Erro: A nota deve ser entre 0 e 10. Tente novamente.');
        }
    } while (P3Mat < 0 || P3Mat > 10);

    let P4Mat: number;
    do {
        P4Mat = readlineSync.questionInt('Digite a nota da Prova 4 de Matematica (0 - 10): ');
        if (P4Mat < 0 || P4Mat > 10) {
            console.error('Erro: A nota deve ser entre 0 e 10. Tente novamente.');
        }
    } while (P4Mat < 0 || P4Mat > 10);

    let P5Mat: number;
    do {
        P5Mat = readlineSync.questionInt('Digite a nota da Prova 5 de Matematica (0 - 10): ');
        if (P5Mat < 0 || P5Mat > 10) {
            console.error('Erro: A nota deve ser entre 0 e 10. Tente novamente.');
        }
    } while (P5Mat < 0 || P5Mat > 10);

    let P6Mat: number;
    do {
        P6Mat = readlineSync.questionInt('Digite a nota da Prova 6 de Matematica (0 - 10): ');
        if (P6Mat < 0 || P6Mat > 10) {
            console.error('Erro: A nota deve ser entre 0 e 10. Tente novamente.');
        }
    } while (P6Mat < 0 || P6Mat > 10);

    let P7Mat: number;
    do {
        P7Mat = readlineSync.questionInt('Digite a nota da Prova 7 de Matematica (0 - 10): ');
        if (P7Mat < 0 || P7Mat > 10) {
            console.error('Erro: A nota deve ser entre 0 e 10. Tente novamente.');
        }
    } while (P7Mat < 0 || P7Mat > 10);

    let P8Mat: number;
    do {
        P8Mat = readlineSync.questionInt('Digite a nota da Prova 8 de Matematica (0 - 10): ');
        if (P8Mat < 0 || P8Mat > 10) {
            console.error('Erro: A nota deve ser entre 0 e 10. Tente novamente.');
        }
    } while (P8Mat < 0 || P8Mat > 10);

    let P1Geo: number;
    do {
        P1Geo = readlineSync.questionInt('Digite a nota da Prova 1 de Geografia (0 - 10): ');
        if (P1Geo < 0 || P1Geo > 10) {
            console.error('Erro: A nota deve ser entre 0 e 10. Tente novamente.');
        }
    } while (P1Geo < 0 || P1Geo > 10);

    let P2Geo: number;
    do {
        P2Geo = readlineSync.questionInt('Digite a nota da Prova 2 de Geografia (0 - 10): ');
        if (P2Geo < 0 || P2Geo > 10) {
            console.error('Erro: A nota deve ser entre 0 e 10. Tente novamente.');
        }
    } while (P2Geo < 0 || P2Geo > 10);

    let P3Geo: number;
    do {
        P3Geo = readlineSync.questionInt('Digite a nota da Prova 3 de Geografia (0 - 10): ');
        if (P3Geo < 0 || P3Geo > 10) {
            console.error('Erro: A nota deve ser entre 0 e 10. Tente novamente.');
        }
    } while (P3Geo < 0 || P3Geo > 10);

    let P4Geo: number;
    do {
        P4Geo = readlineSync.questionInt('Digite a nota da Prova 4 de Geografia (0 - 10): ');
        if (P4Geo < 0 || P4Geo > 10) {
            console.error('Erro: A nota deve ser entre 0 e 10. Tente novamente.');
        }
    } while (P4Geo < 0 || P4Geo > 10);

    let P5Geo: number;
    do {
        P5Geo = readlineSync.questionInt('Digite a nota da Prova 5 de Geografia (0 - 10): ');
        if (P5Geo < 0 || P5Geo > 10) {
            console.error('Erro: A nota deve ser entre 0 e 10. Tente novamente.');
        }
    } while (P5Geo < 0 || P5Geo > 10);

    let P6Geo: number;
    do {
        P6Geo = readlineSync.questionInt('Digite a nota da Prova 6 de Geografia (0 - 10): ');
        if (P6Geo < 0 || P6Geo > 10) {
            console.error('Erro: A nota deve ser entre 0 e 10. Tente novamente.');
        }
    } while (P6Geo < 0 || P6Geo > 10);

    let P7Geo: number;
    do {
        P7Geo = readlineSync.questionInt('Digite a nota da Prova 7 de Geografia (0 - 10): ');
        if (P7Geo < 0 || P7Geo > 10) {
            console.error('Erro: A nota deve ser entre 0 e 10. Tente novamente.');
        }
    } while (P7Geo < 0 || P7Geo > 10);

    let P8Geo: number;
    do {
        P8Geo = readlineSync.questionInt('Digite a nota da Prova 8 de Geografia (0 - 10): ');
        if (P8Geo < 0 || P8Geo > 10) {
            console.error('Erro: A nota deve ser entre 0 e 10. Tente novamente.');
        }
    } while (P8Geo < 0 || P8Geo > 10);

    let P1Hist: number;
    do {
        P1Hist = readlineSync.questionInt('Digite a nota da Prova 1 de Historia (0 - 10): ');
        if (P1Hist < 0 || P1Hist > 10) {
            console.error('Erro: A nota deve ser entre 0 e 10. Tente novamente.');
        }
    } while (P1Hist < 0 || P1Hist > 10);

    let P2Hist: number;
    do {
        P2Hist = readlineSync.questionInt('Digite a nota da Prova 2 de Historia (0 - 10): ');
        if (P2Hist < 0 || P2Hist > 10) {
            console.error('Erro: A nota deve ser entre 0 e 10. Tente novamente.');
        }
    } while (P2Hist < 0 || P2Hist > 10);

    let P3Hist: number;
    do {
        P3Hist = readlineSync.questionInt('Digite a nota da Prova 3 de Historia (0 - 10): ');
        if (P3Hist < 0 || P3Hist > 10) {
            console.error('Erro: A nota deve ser entre 0 e 10. Tente novamente.');
        }
    } while (P3Hist < 0 || P3Hist > 10);

    let P4Hist: number;
    do {
        P4Hist = readlineSync.questionInt('Digite a nota da Prova 4 de Historia (0 - 10): ');
        if (P4Hist < 0 || P4Hist > 10) {
            console.error('Erro: A nota deve ser entre 0 e 10. Tente novamente.');
        }
    } while (P4Hist < 0 || P4Hist > 10);

    let P5Hist: number;
    do {
        P5Hist = readlineSync.questionInt('Digite a nota da Prova 5 de Historia (0 - 10): ');
        if (P5Hist < 0 || P5Hist > 10) {
            console.error('Erro: A nota deve ser entre 0 e 10. Tente novamente.');
        }
    } while (P5Hist < 0 || P5Hist > 10);

    let P6Hist: number;
    do {
        P6Hist = readlineSync.questionInt('Digite a nota da Prova 6 de Historia (0 - 10): ');
        if (P6Hist < 0 || P6Hist > 10) {
            console.error('Erro: A nota deve ser entre 0 e 10. Tente novamente.');
        }
    } while (P6Hist < 0 || P6Hist > 10);

    let P7Hist: number;
    do {
        P7Hist = readlineSync.questionInt('Digite a nota da Prova 7 de Historia (0 - 10): ');
        if (P7Hist < 0 || P7Hist > 10) {
            console.error('Erro: A nota deve ser entre 0 e 10. Tente novamente.');
        }
    } while (P7Hist < 0 || P7Hist > 10);

    let P8Hist: number;
    do {
        P8Hist = readlineSync.questionInt('Digite a nota da Prova 8 de Historia (0 - 10): ');
        if (P8Hist < 0 || P8Hist > 10) {
            console.error('Erro: A nota deve ser entre 0 e 10. Tente novamente.');
        }
    } while (P8Hist < 0 || P8Hist > 10);

    const Media_Matematica = (P1Mat + P2Mat + P3Mat + P4Mat + P5Mat + P6Mat + P7Mat + P8Mat) / 8;
    const Media_Geografia = (P1Geo + P2Geo + P3Geo + P4Geo + P5Geo + P6Geo + P7Geo + P8Geo) / 8;
    const Media_Historia = (P1Hist + P2Hist + P3Hist + P4Hist + P5Hist + P6Hist + P7Hist + P8Hist) / 8;



    if (!nome || !idade || !serie || !Media_Matematica || !Media_Geografia || !Media_Historia) {
        console.error("Erro: Todos os campos são obrigatórios! Operação cancelada.");
        await pool.end();
        return;
    }

    try {
        console.log("\nConectando ao banco de dados...");
        const client = await pool.connect();
        console.log("Conexão bem-sucedida! Inserindo dados...");

        const insertQuery = `
            INSERT INTO public.aluno (nome, idade, serie, Media_Matematica, Media_Geografia, Media_Historia)
            VALUES ($1, $2, $3, $4, $5, $6)
        `;
        const values = [nome, idade, serie, Media_Matematica, Media_Geografia, Media_Historia];

        await client.query(insertQuery, values);
        client.release();

        console.log("-----------------------------------------");
        console.log(`Dados inseridos com sucesso!`);
        console.log(`Nome: ${nome}, Idade: ${idade}, Série: ${serie} ºAno, \nMédia Matemática: ${Media_Matematica}, \nMédia Geografia: ${Media_Geografia}, \nMédia História: ${Media_Historia}`);
        console.log("-----------------------------------------");

    } catch (error) {
        console.error("Ocorreu um erro ao interagir com o banco de dados:", error);
    } finally {
        await pool.end();
        console.log("Conexão com o banco de dados encerrada.");
    }
}

inserirDados();
