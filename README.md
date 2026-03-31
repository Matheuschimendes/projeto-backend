# 🚀 E-commerce API

API REST desenvolvida com Node.js, Express e Sequelize, com autenticação via JWT e banco de dados MySQL.

---

## 🛠️ Tecnologias

* Node.js
* Express
* MySQL
* Sequelize
* JWT (jsonwebtoken)
* bcryptjs

---

## 🔐 Autenticação

A API utiliza autenticação via JWT.

### Login

POST /v1/auth/token

```json
{
  "email": "user@email.com",
  "password": "123456"
}
```

---

## 📦 Funcionalidades

* CRUD de usuários
* Autenticação com JWT
* CRUD de categorias
* CRUD de produtos
* Relacionamento entre produtos e categorias
* Filtros de busca
* Paginação

---

## 🔗 Endpoints

### 👤 Usuários

* GET /v1/user
* POST /v1/user

### 📂 Categorias

* GET /v1/category/search
* POST /v1/category

### 🛍️ Produtos

* GET /v1/product/search
* POST /v1/product

---

## 🔎 Filtros

```http
GET /v1/product/search?name=tenis
GET /v1/product/search?minPrice=100&maxPrice=300
GET /v1/product/search?page=1&limit=5
```

---

## ⚙️ Como rodar

```bash
npm install
npm run migrate
npm run dev
```

---

## 👨‍💻 Autor

Matheus Chimendes
