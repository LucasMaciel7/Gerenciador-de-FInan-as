
# Gerenciador de Finanças

Um sistema simples para gerenciar tarefas e finanças de uma clínica odontológica. O sistema inclui um backend em Node.js (Express) com Prisma para integração com banco de dados PostgreSQL e um frontend em React utilizando Vite e Tailwind CSS.

![image](https://github.com/user-attachments/assets/e52c508b-16d3-4dfa-90f4-a600730ab0e8)



## Funcionalidades
- Cadastro de tarefas (dentista, paciente, descrição, valores, etc.).
- Listagem de tarefas com tabela estilizada.
- Integração com banco de dados PostgreSQL.

## Tecnologias Utilizadas

### Backend
- Node.js
- Express
- Prisma ORM
- PostgreSQL

### Frontend
- React
- Vite
- Tailwind CSS
- Axios

### Infraestrutura
- Docker para containerização do banco de dados.

## Estrutura do Projeto
```
Gerenciador-de-Financas/
├── backend/
│   ├── src/
│   │   ├── models/
│   │   ├── routes/
│   │   ├── controllers/
│   │   ├── prisma/         # Configurações do Prisma
│   │   └── server.ts
│   ├── package.json
│   └── tsconfig.json
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── App.tsx
│   │   ├── index.tsx![WhatsApp Image 2024-11-24 at 22 20 40](https://github.com/user-attachments/assets/2febe2f1-8c18-4a61-9382-5c6de178ebe0)

│   │   └── styles/
│   ├── package.json
│   └── vite.config.ts
├── docker-compose.yml
├── README.md
└── .env
```

## Pré-requisitos
Certifique-se de ter os seguintes softwares instalados:
- Node.js (versão 16 ou superior)
- Docker e Docker Compose
- PostgreSQL (opcional se não usar Docker)

## Configuração e Execução

### 1. Clonar o repositório
```bash
git clone git@github.com:LucasMaciel7/Gerenciador-de-FInancas.git
cd gerenciador-financas
```

### 2. Configurar variáveis de ambiente
No diretório raiz, crie um arquivo `.env` com as seguintes variáveis:

```
# Banco de Dados
DATABASE_URL=postgresql://root:root@localhost:5432/gerenciador_financas
```

### 3. Subir o Banco de Dados com Docker
No diretório raiz, execute:
```bash
docker-compose up -d
```
Isso criará um banco de dados PostgreSQL rodando na porta `5432`.

### 4. Configurar o Backend
Entre no diretório backend:
```bash
cd backend
```
Instale as dependências:
```bash
npm install
```
Execute as migrations do banco de dados:
```bash
npx prisma migrate dev
```
Inicie o servidor:
```bash
npm run dev
```
O backend estará disponível em: `http://localhost:3000`.

### 5. Configurar o Frontend
Entre no diretório frontend:
```bash
cd ../frontend
```
Instale as dependências:
```bash
npm install
```
Inicie o servidor do frontend:
```bash
npm run dev
```
O frontend estará disponível em: `http://localhost:5173`.

## Testando a Aplicação
1. Abra o navegador em `http://localhost:5173`.
2. Interaja com o formulário e veja os dados sendo atualizados na tabela.
3. O backend pode ser testado diretamente usando ferramentas como Postman ou `curl`.

## Contribuindo
Sinta-se à vontade para enviar Pull Requests ou relatar problemas na aba de Issues.

## Licença
Este projeto está licenciado sob a MIT License.
