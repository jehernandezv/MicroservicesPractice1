import express, {Application, response} from 'express';
import cors from 'cors';
import morgan from 'morgan';
import axios from 'axios';
import './database';
import Log from './models/Log';



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


        this.app.get('/', async function (req, res) {
            axios.get('http://localhost:6000/api/ubuntu1/1/' + sentences.length).then(async function (response) {
                await res.json({
                    message: sentences[response.data.message]
                });
            }).catch(function (error) {
                console.log(error);
                res.json({message: error});
            })
        });

        this.app.post('/saveLog', async function (req, res) {
            console.log(req.body.url);
            const log = new Log({
                method:req.body.method,
                url:req.body.url,
                httpVersion:req.body.httpVersion,
                statusCode:req.body.statusCode,
                statusMessage:req.body.statusMessage,
                nameHost:req.body.nameHost,
                systemHost:req.body.systemHost,
                dateHost:req.body.dateHost,
                outputServerHost:req.body.outputServerHost,
                hostOS:req.body.hostOS,
                hostType:req.body.hostType,
                hostArch:req.body.hostArch
            });
            await log.save();
            await res.json({
                message:'Ha sido guardado su log'
            });
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
