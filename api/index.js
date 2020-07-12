var express = require('express');
var cors = require('cors');
var app = express();
var port = process.argv[2];
app.use(cors());


var sentences = ["“Nunca había pasado antes.”", "“Pues ayer funcionaba…”",
  "“¿Cómo es posible?”", "“Tiene que ser un problema de tu hardware.”",
  "“¿Qué hiciste mal para lograr que fallara?”",
  "“Algo debe de estar mal en tus datos.”",
  "“¡Si no he tocado ese módulo en meses!”",
  "“Debes de estar usando una versión anterior.”",
  "“Es sólo una desafortunada coincidencia.”",
  "“¡Es que no lo puedo probar todo!”",
  "“ESTO, no puede ser la causa de ESO.”",
  "“Funciona, pero no lo he probado.”",
  "“¡Alguien debe de haber cambiado mi código!”"];

app.get('/', function (req, res) {
  res.json({
   message: sentences[Math.floor(Math.random() * (sentences.length - 1)) + 1]
  });
});

app.post('/', function (req, res) {
  res.json({
   message: 'Got a POST request'
  });
});

app.put('/user', function (req, res) {
  res.json({
    message : 'Got a PUT request at /user'
  });
});

app.listen(port, function () {
  console.log('Example app listening on port '+ port+'!');
});