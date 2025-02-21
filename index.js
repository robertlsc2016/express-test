const express = require("express");
const app = express();
const port = 3000; // Você pode mudar para a porta que preferir

// Definir uma rota básica
app.get("/", (req, res) => {
  console.log(req.ip);
  const userIp = req.headers["x-forwarded-for"] || req.connection.remoteAddress;

  res.send(
    `Olá, Mundo! IP do usuário: ${userIp} ${req.headers["user-agent"]}  `
  );
});

// Iniciar o servidor
app.listen(port, "0.0.0.0", () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
