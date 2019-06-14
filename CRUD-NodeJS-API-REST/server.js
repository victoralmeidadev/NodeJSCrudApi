const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const requireDir = require('require-dir');


//iniciando o app
const app = express();
app.use(express.json());
app.use(cors());

//iniciando o DB
mongoose.connect(process.env.MONGO_URL, { useNewUrlParser: true })
requireDir('./src/models');

//Rotas
app.use('/api', require('./src/routes'));
app.listen(process.env.PORT || 3000);