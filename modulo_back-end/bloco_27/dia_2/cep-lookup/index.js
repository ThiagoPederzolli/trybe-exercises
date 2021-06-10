const express = require('express');
const app = express();
require('dotenv').config();
const CEP = require('./controllers/Cep');

app.use(express.json());

app.get('/lookup', CEP.checkCep);

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Server is running in PORT: ${PORT}`);
});


