<h1 align="center">API Blog</h1>

<img src="https://github.com/user-attachments/assets/f25877eb-0b9c-4fe9-850b-e0b73004f9e1" alt="" />

  <h2 align="center"> 💻 Instalação e Uso</h2>

  ### 🛠️ Pré-requisitos
  - Docker
  - Git
  - Node.js
  - NPM
  - Postman ou Insomnia
  - VSCode

<div align="center">

  | Passos | Comandos | Descrição |
  | --- | --- | --- |
  | 01 | `git clone https://github.com/GomesKay/API-Blog.git` | Clona este repositório no seu computador |
  | 02 | `cd API-Blog` | Acesse a pasta do projeto |
  | 03 | `npm install` | Instala todas as dependências necessárias |
  | 04 | `docker compose up -d` | Sobe o container com o PostgreSQL (Banco de Dados) |
  | 05 | Configure o arquivo `.env` | Copie o `.env.example` para `.env` e configure sua conexão com o banco de dados |
  | 06 | `npx prisma migrate dev` | Executa as migrations para criar as tabelas no banco de dados |
  | 07 | `npm run dev` | Inicia o servidor em modo desenvolvimento |
  | 08 | `npm run test` | Inicia todos os testes feitos com Jest utilizando mocks dos services |
  | 09 | Use o Postman ou Insomnia | Faça requisições HTTP para testar as rotas da API (Opcional) |

  ---

  ## 🔧 Arquitetura da API

  | HTTP | Rotas | Descrição |
  | --- | --- | --- |
  | `GET` | /posts | Retorna todos os posts |
  | `GET` | /posts/:id | Retorna um post |
  | `POST` | /posts | Cria novo post |
  | `PUT` | /posts/:id | Atualiza um post |
  | `DELETE` | /posts/:id | Deleta um post |
  | `POST` | /posts/:postId/comment | Cria novo comentário |
  | `DELETE` | /posts/:postId/comment/:id | Deleta um comentário |

  ## 🚀 Tecnologias
  <img title="Biome" src="https://github.com/user-attachments/assets/ca50003f-5d35-4299-9474-30b305ae07cb" alt="Biome" width="50" /> &nbsp;
  <img title="Jest" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jest/jest-plain.svg" alt="Jest" width="50" /> &nbsp;
  <img title="Docker" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg" alt="Docker" width="50" /> &nbsp;
  <img title="Postman" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg" alt="Postman" width="50" /> &nbsp;
  <img title="Express" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg" alt="Express" width="50" /> &nbsp;
  <img title="Node.js" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg" alt="Node.js" width="50" /> &nbsp;
  <img title="PrismaORM" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/prisma/prisma-original.svg" alt="PrismaORM" width="50" /> &nbsp;
  <img title="PostgreSQL" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg" alt="PostgreSQL" width="50" /> &nbsp;
  <img title="TypeScript" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg" alt="TypeScript" width="50" /> &nbsp;
  <img title="Zod" src="https://github.com/user-attachments/assets/bb33ed33-2e91-473c-9494-41386bf5111f" alt="Zod" width="50" />

  ## 🗡️ Projeto
  <p>Nesse projeto fiz uma API Blog usando CRUD, Arquitetura MVC e Banco de Dados Relacional com Prisma e PostgreSQL. E o objetivo desse projeto foi colocar em prática a utilização do <b>Express</b> (Framework Minimalista) juntamente com a biblioteca de testes <b>Jest</b>.</p>

  ## 👨‍💻 Contato
  Feito com 🖤 por [Caio Gomes](https://github.com/GomesKay)
  
</div>
