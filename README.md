# 🧪 backlab-01 — Laboratório de Backends: CRUD com Node.js + Express + MongoDB

[![Node.js](https://img.shields.io/badge/Node.js-18.x-green?logo=node.js)](https://nodejs.org/)
[![Express](https://img.shields.io/badge/Express.js-Framework-lightgrey?logo=express)](https://expressjs.com/)
[![MongoDB](https://img.shields.io/badge/MongoDB-Database-brightgreen?logo=mongodb)](https://www.mongodb.com/)
[![License: MIT](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)

> 🚀 **backlab-01** é o primeiro projeto da série **“Laboratório de Backends”**, criado para explorar de forma prática e didática a construção de APIs RESTful com **Node.js**, **Express** e **MongoDB**.

---

## 🎯 Propósito do Projeto

O **backlab-01** foi desenvolvido como um **laboratório de aprendizado**, com o objetivo de dominar os conceitos essenciais do **desenvolvimento backend moderno**:

- Criar e estruturar uma API RESTful do zero;  
- Implementar um CRUD completo (Create, Read, Update, Delete);  
- Aplicar **boas práticas**, como tratamento centralizado de erros, segurança básica e variáveis de ambiente;  
- Compreender a integração entre **Node.js**, **Express** e **MongoDB**;  
- Utilizar o **Postman** para testar e documentar rotas.

> 💡 Este projeto é o ponto de partida para a série **backlab**, onde cada etapa adiciona novas camadas de complexidade e boas práticas profissionais.

---

## 🧰 Tecnologias Utilizadas

| Tecnologia | Descrição |
|-------------|------------|
| [Node.js](https://nodejs.org/) | Ambiente de execução JavaScript no servidor |
| [Express.js](https://expressjs.com/) | Framework minimalista para criação de APIs REST |
| [MongoDB](https://www.mongodb.com/) | Banco de dados NoSQL orientado a documentos |
| [Mongoose](https://mongoosejs.com/) | ODM para modelagem e manipulação de dados |
| [dotenv](https://www.npmjs.com/package/dotenv) | Gerenciamento de variáveis de ambiente |
| [Postman](https://www.postman.com/) | Testes e documentação de rotas da API |

---

## 🗂️ Estrutura de Pastas

```bash
backlab-01/
├── src/
│   ├── config/
│   │   └── database.js         # Configuração da conexão com o MongoDB
│   ├── controllers/
│   │   └── itemController.js   # Lógica de negócio (CRUD)
│   ├── models/
│   │   └── Item.js             # Schema do Mongoose
│   ├── routes/
│   │   └── itemRoutes.js       # Rotas REST da API
│   ├── middlewares/
│   │   └── errorHandler.js     # Tratamento centralizado de erros
│   └── app.js                  # Configuração do servidor Express
├── .env                        # Variáveis de ambiente (porta, URI do Mongo)
├── package.json
└── server.js                   # Ponto de entrada principal
```

---

## ⚙️ Instalação e Execução

### 🧩 Pré-requisitos
- Node.js (versão LTS)
- MongoDB (local ou Atlas)
- Postman (para testar endpoints)

### 📦 Passos para rodar o projeto

```bash
# 1️⃣ Clone o repositório
git clone https://github.com/Reinaldo-rs/backlab-01.git

# 2️⃣ Acesse o diretório do projeto
cd backlab-01

# 3️⃣ Instale as dependências
npm install

# 4️⃣ Configure as variáveis de ambiente
# Crie um arquivo .env e adicione:
PORT=3000
MONGO_URI=mongodb://localhost:27017/backlab01

# 5️⃣ Inicie o servidor
npm start

# 6️⃣ Acesse a API
http://localhost:3000
```

---

## 🔗 Endpoints Principais

### ➕ Criar um item  
`POST /api/items`

**Exemplo de corpo JSON:**
```json
{
  "name": "Teclado Mecânico",
  "price": 350.00,
  "category": "Periféricos"
}
```

---

### 📋 Listar todos os itens  
`GET /api/items`

**Exemplo de resposta:**
```json
[
  {
    "_id": "671f12ab9c3a4b5d9e88b132",
    "name": "Teclado Mecânico",
    "price": 350,
    "category": "Periféricos",
    "createdAt": "2025-10-27T14:12:03.512Z"
  }
]
```

---

### 🔍 Buscar item por ID  
`GET /api/items/:id`

```bash
curl http://localhost:3000/api/items/671f12ab9c3a4b5d9e88b132
```

---

### ✏️ Atualizar um item  
`PUT /api/items/:id`

```json
{
  "price": 320.00
}
```

---

### ❌ Deletar um item  
`DELETE /api/items/:id`

```bash
curl -X DELETE http://localhost:3000/api/items/671f12ab9c3a4b5d9e88b132
```

---

## 🧠 Boas Práticas Aplicadas

✅ **Código Limpo e Modular:** separação clara entre camadas (`controllers`, `routes`, `models`).  
✅ **Tratamento Centralizado de Erros:** middleware dedicado para erros de validação e exceções.  
✅ **Uso de Variáveis de Ambiente:** dados sensíveis mantidos fora do código-fonte.  
✅ **Segurança Básica:** configuração de CORS, sanitização e uso de dependências seguras.  
✅ **Versionamento de Rotas:** padrão `/api/v1/` para futuras versões.  
✅ **Documentação e Testes:** endpoints testados e validados via Postman.

---

## 🔮 Próximos Passos — *Rumo ao backlab-02*

O **backlab-02** trará novos desafios e aprimoramentos:

- 🔐 Autenticação e autorização com **JWT**  
- 🧩 Middleware de verificação de token  
- 📚 Camadas de **serviço e repositório**  
- 🧪 Testes automatizados com **Jest**  
- ☁️ Deploy em plataformas como **Render** ou **Railway**

> Cada novo *backlab* será uma evolução incremental, simulando a progressão de um backend real em ambiente profissional.

---

## 💡 Inspiração e Aprendizado

Este projeto simboliza o início de uma jornada de aprimoramento constante.  
Cada commit, teste e melhoria fazem parte do processo de se tornar um **desenvolvedor backend completo**.

> _“Aprender é experimentar. E cada laboratório é uma oportunidade de crescer como desenvolvedor.”_

---

## 📜 Licença

Este projeto está sob a licença [MIT](LICENSE).  
Feito com ❤️ por [Reinaldo Soares](https://github.com/Reinaldo-rs).

---

### 🧩 Links Úteis

- 🌐 [Repositório no GitHub](https://github.com/Reinaldo-rs/backlab-01)
- 🧠 Série completa: *Laboratório de Backends* (em desenvolvimento)
- 💬 [Contato via LinkedIn](https://www.linkedin.com/in/reinaldo-soares/)
