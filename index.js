const express = require("express");
const app = express();
const port = 3000; // Você pode mudar para a porta que preferir

// Definir uma rota básica
app.get("/", (req, res) => {
  res.send("Olá, Mundo!");
});

// Iniciar o servidor
app.listen(port, "0.0.0.0", () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
