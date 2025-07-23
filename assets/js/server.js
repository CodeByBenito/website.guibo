const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = 3000;

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.post('/enviar', (req, res) => {
  const { nome, email, telefone, assunto, mensagem } = req.body;
  console.log('Dados recebidos:', req.body);

  // Aqui você pode salvar em banco de dados, enviar por email, etc.

  res.status(200).send('Mensagem recebida com sucesso!');
});

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:3000/enviar${PORT}`);
});
