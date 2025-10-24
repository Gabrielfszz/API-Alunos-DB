# API-Alunos-DB (TypeScript + Node.js + DB)

App teste de Cálculo de Médias armazenando em um **Banco de Dados**. 

**Desenvolvido para a matéria de Typescript, pelos alunos:**  

Gabriel Filipe dos Santos RA: 2517645  
Italo Guilherme Pinheiro Rodrigues RA: 2526314  
Pedro Henrique Assis de Oliveira RA: 2508585  
Matheus Gomes Nagy RA: 2508094   
Joaquim da Silva dos Santos RA:2502410

## ✨ Recursos

* **Cadastro de Alunos**: nome, serie, idade.
* **Cadastro de Notas**: Notas de Matematica, Geografia, Historia.
* **Cálculo das Médias**: Considerando 8 provas por matéria.
* **Armazenamento**: `Banco de dados em PostgreSQL + pgAdmin4`


---

## 📁 Estrutura de pastas

```
API-Alunos-DB/
├─ js/                # arquivos .js gerados pelo TypeScript
├─ node_modules/      # módulos instalados com o comando npm i -D typescript ts-node @types/node && npm i -D @types/readline-sync
├─ ts/                # código-fonte .ts (ex.: ts/index.ts)
├─ .gitignore         # arquivo .gitignore
├─ package.json      
├─ package-lock.json  
├─ README.md          # arquivo README
└─ tsconfig.json      
```


## 🔧 Pré-requisitos

* **Node.js v22.18.0** 
* **npm v10.9.3**
* **git v2.51.0**
* **Typescript v5.9.2**
* **docker v28.3.2**
* **pgAdmin 4 v9.8**
---

## 🚀 Instalação

**Antes de tudo, é necessário baixar e instalar o node.js, o git, o Typescript, o Docker Desktop e o pgAdmin 4**  
* Baixe e instale o node.js no site abaixo:
```bash
https://nodejs.org/en/download
```  
* Baixe e instale o git no site abaixo:
```bash
https://git-scm.com/downloads
```
* Após a instalação dos programas acima, abra o git e digite o seguinte código:
```bash
npm i -g typescript
```
Esse código instala a linguagem Typescript, necessária para o funcionamento do sistema.      

* Baixe e instale o Docker Desktop no site abaixo:
```bash
https://docs.docker.com/desktop/setup/install/windows-install/
```
* Baixe e instale o pgAdmin 4 no site abaixo:
```bash
https://www.postgresql.org/ftp/pgadmin/pgadmin4/v9.8/windows/
```
  
**Após os passos acima, configure o sistema conforme abaixo:**

Abra o git bash e execute os seguintes comandos:

1. Para ir à sua Área de Trabalho:
```bash
cd Desktop/
```
2. Para clonar o repositório:
```bash
git clone https://github.com/Gabrielfszz/API-Alunos-DB
```
3. Para ir à pasta do repositório clonado:
```bash
cd API-Alunos-DB/
```
4. Para instalar os módulos do node:
```bash
npm i -D typescript ts-node @types/node && npm i -D @types/readline-sync
```

> No VS Code, se aparecerem erros de tipos do Node, use **Ctrl+Shift+P → TypeScript: Restart TS Server**.

---

## ▶️ Como configurar o Docker + pgAdmin4

Após instalar o Docker e o pgAdmin 4, abra o Powershell ISE e execute os seguintes comandos:  
```bash
docker --version
hostname

docker run -d `
--name meu-postgres `
-e POSTGRES_USER=aluno `
-e POSTGRES_PASSWORD=102030 `
-e POSTGRES_DB=db_profedu `
-p 5432:5432 `
postgres:latest
```

Depois de aplicar os comandos, abra o Docker Desktop. Você verá que o contêiner já está disponível.  
<img width="1582" height="886" alt="image" src="https://github.com/user-attachments/assets/8a017fc3-0956-4a25-b2ae-144e1cd4b351" />

Para conectar ao banco de dados, vamos utilizar uma ferramenta gratuita chamada pgadmin4, que no meu caso esta na versão 9.8.  
O pgAdmin 4 é a ferramenta oficial de administração e gerenciamento do PostgreSQL, desenvolvida pela própria equipe do PostgreSQL.  
É um aplicativo web-based (roda no navegador), mas também pode ser instalado como aplicativo desktop.  

Ele é, basicamente, para o PostgreSQL o que o SQL Server Management Studio (SSMS) é para o SQL Server ou o MySQL Workbench é para o MySQL.  
  
Use as credenciais do script para se conectar ao banco de dados.  
  
<img width="1600" height="858" alt="image" src="https://github.com/user-attachments/assets/d24c8612-0c51-4258-9937-d0971f523cf1" />



  Após isso, crie uma tabela conforme abaixo (para salvar as informações digitadas na API)
  <img width="1649" height="868" alt="image" src="https://github.com/user-attachments/assets/a5293906-2e07-42fa-ae6b-e1a57642231e" />



---
## 🖥️ Como usar o sistema  

1 - **Modo desenvolvimento (executa direto o arquivo .ts):**

```bash
npm run dev
```

2 - **Transpilar e rodar o JS gerado:**

```bash
npm run build && npm start
```

Após executar o sistema, digite as informações correspondentes:  
* Nome do Aluno  
* Série  
* Idade  
* Notas das Provas de Matemática  
* Notas das Provas de Geografia  
* Notas das Provas de História  

---




