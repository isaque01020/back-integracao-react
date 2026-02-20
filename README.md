# AuthLab Backend

API REST desenvolvida em Node.js para gerenciamento de usuários, oferecendo funcionalidades de cadastro e login integradas a uma aplicação frontend em React.

Projeto criado com foco educacional para prática de construção de APIs, validação de dados e integração fullstack.

Front-end disponível em:

  https://github.com/isaque01020/Pratica-front-integracao

---

## 🛠 Tecnologias Utilizadas

- Node.js
- Express
- MongoDB
- Mongoose

---

## 📂 Estrutura do Projeto
```
src/
 ├── config
 ├── controllers/
 ├── models/
 ├── routes/
 └── app.js
 server.js
```
Organização baseada na separação por responsabilidade (Model, Controller e Rotas).

---

## 🔐 Funcionalidades

- Cadastro de usuário
- Login de usuário
- Validação de e-mail e outros campos
- Persistência de dados no MongoDB
- Integração com frontend React

⚠️ Observação:  
Atualmente as senhas são comparadas diretamente (sem hash) e não há uso de JWT.  
O projeto tem fins educacionais e futuras melhorias incluem implementação de criptografia e autenticação baseada em token.

---

## 📡 Endpoints

### 📌 Cadastro

POST /conta/cadastro

Body:

{
  "nome": "Usuario Nome",
  "email": "usuario@email.com",
  "senha": "123456",
  "cpf": "54271113107",
  "telefone": "1199999999"
}

---

### 📌 Login

POST /conta/login

Body:

{
  "email": "usuario@email.com",
  "senha": "123456"
}

---

## ⚙️ Variáveis de Ambiente

Crie um arquivo `.env` na raiz do projeto com:

MONGO_URI=sua_string_de_conexao_mongodb

---

## 🚀 Como Executar o Projeto

Clone o repositório:

git clone https://github.com/seu-usuario/authlab-backend.git

Instale as dependências:

npm install

Execute o servidor:

npm run dev

O servidor iniciará na porta definida

---

## 🌐 Integração com Frontend

Este backend é consumido pela aplicação:

AuthLab Frontend

Certifique-se de que o backend esteja rodando antes de iniciar o frontend.

---

## 📌 Objetivo do Projeto

Este projeto foi desenvolvido para consolidar conhecimentos em:

- Criação de API REST com Express
- Modelagem de dados com Mongoose
- Validação de entrada de dados
- Integração frontend + backend

---

## 📎 Melhorias Futuras

- Implementação de hash de senha com bcrypt
- Autenticação baseada em JWT
- Middleware de autenticação e erros
- Melhor estruturação de logs
