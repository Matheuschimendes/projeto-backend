require("dotenv").config();
const db = require("../models");

async function testConnection() {
  try {
    await db.sequelize.authenticate();
    console.log("✅ Conexão com o banco realizada com sucesso.");
  } catch (error) {
    console.error("❌ Erro ao conectar com o banco:", error.message);
  }
}

testConnection();