var express = require('express');
var cors = require('cors');
const morgan = require('morgan');
const axios = require('axios');

var app = express();
var port = process.argv[2];
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));


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

  axios.get('http://192.168.100.7:5000/api/ubuntu1/1/'+sentences.length)
  .then(function (response){
    res.json({
      message: sentences[response.data.message]
     });
  })
  .catch(function (error){
    console.log(error);
    res.json({
      message: error
     });
  })
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