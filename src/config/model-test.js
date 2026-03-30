require("dotenv").config();
const db = require("../models");

async function testModel() {
  try {
    await db.sequelize.authenticate();
    console.log("Banco conectado com sucesso.");

    const users = await db.User.findAll();
    console.log("Model User funcionando.");
    console.log(users);
  } catch (error) {
    console.error("Erro ao testar model:", error);
  } finally {
    await db.sequelize.close();
  }
}

testModel();