//função fábrica/framework para aplicações web para Node.js otimiza a construção de aplicações web e API's
const express = require('express');
const cors = require('cors');
const routes = require('./routes'); //passando o que foi exportado do routes.js para uma constante
const path = require('path');

const app = express(); //passando a função express para uma constante

app.use(cors()); //usa

app.use(express.json()); //convertendo para json
app.use(routes) //usa

//pega caminho (caminho desse pasta, volta uma pasta, entra na pasta uploads)
//path.resolve() retorna o caminho absoluto
const uploadDir = path.resolve(__dirname, '..', 'uploads');
//criando uma função que retorna arquivos de uma pasta recebido pelo uploadDir
const callbackUploadStatic = express.static(uploadDir);
//usuário vai pra uploads executa callbackUploadStatic
app.use('/uploads', callbackUploadStatic);

app.listen(3333); //executa servidor