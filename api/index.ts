import express, {Application} from 'express';
import cors from 'cors';
import morgan from 'morgan';
import axios from 'axios';

class Server {
    public app : Application;
    public port : string;

    constructor() {
        this.app = express();
        this.port = process.argv[2];
        this.config();
        this.routes();
    }

    config(): void {

        this.app.use(cors());
        this.app.use(morgan('dev'));
        this.app.use(express.json());
        this.app.use(express.urlencoded({extended: false}));
    }

    routes(): void {
        const sentences = [
            "“Nunca había pasado antes.”",
            "“Pues ayer funcionaba…”",
            "“¿Cómo es posible?”",
            "“Tiene que ser un problema de tu hardware.”",
            "“¿Qué hiciste mal para lograr que fallara?”",
            "“Algo debe de estar mal en tus datos.”",
            "“¡Si no he tocado ese módulo en meses!”",
            "“Debes de estar usando una versión anterior.”",
            "“Es sólo una desafortunada coincidencia.”",
            "“¡Es que no lo puedo probar todo!”",
            "“ESTO, no puede ser la causa de ESO.”",
            "“Funciona, pero no lo he probado.”",
            "“¡Alguien debe de haber cambiado mi código!”"
        ];


        this.app.get('/', function (req, res) {
            axios.get('http://IPSERVER:5000/api/ubuntu1/1/' + sentences.length).then(function (response) {
                res.json({
                    message: sentences[response.data.message]
                });
            }).catch(function (error) {
                console.log(error);
                res.json({message: error});
            })
        });

        this.app.post('/', function (req, res) {
            res.json({message: 'Got a POST request'});
        });

        this.app.put('/user', function (req, res) {
            res.json({message: 'Got a PUT request at /user'});
        });
    }

    start(): void {
        console.log('port: ' + this.port)
        this.app.listen(this.port, function () {
            console.log('app listening!');
        });
    }
}

const server = new Server();
server.start();
