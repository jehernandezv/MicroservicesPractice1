import express, {Application, response} from 'express';
import cors from 'cors';
require('dotenv').config();
import morgan from 'morgan';
import axios from 'axios';
// import './database';
import Log from './models/Log';

class Server {
    public app : Application;
    public port : string;
    public turn : number;

    constructor() {
        this.app = express();
        this.port = process.argv[2] || process.env.PORT_HOST + '';
        this.turn = 0;
        this.config();
        this.routes(this.turn);
    }
    config(): void {
        this.app.use(cors());
        this.app.use(morgan('dev'));
        this.app.use(express.json());
        this.app.use(express.urlencoded({extended: false}));
    }

    routes(turn:Number): void {
        this.app.get('/:min/:max', async function (req, res) {
<<<<<<< HEAD
            const {min, max} = req.params;
            axios.get('http://'+ (turn == 0)?`${process.env.SERVER_UBUNTU1}`:`${process.env.SERVER_UBUNTU2}`+ ':' + process.env.PORT_SERVER_UBUNTU2 + '/api/ubuntu1/' + min + '/' + max).then(async function (response) {    
            if (response.data.statusCode == '200') {
                    await res.json({message: response.data.message, statusCode: 200});
                } else {
                    await res.json(response.data);
                }
                turn == 0 ? turn = 1:turn = 0;
=======
            const { min, max } = req.params;
            axios.get('http://'+process.env.SERVER_UBUNTU1+
            ':'+process.env.PORT_SERVER_UBUNTU+'/api/ubuntu1/'+min+'/'+max)
            .then(async function (response) {
                if(response.data.statusCode == '200'){
                await res.json({
                    message: response.data.message,
                    statusCode: 200
                });
            }else{
                await res.json(response.data);
            }
>>>>>>> a86c3e5fbb84e3a35d585ef7892d590f87684c64
                const log = new Log({
                    method: response.data.method,
                    url: response.data.url,
                    httpVersion: response.data.httpVersion,
                    statusCode: response.data.statusCode,
                    statusMessage: response.data.statusMessage,
                    nameHost: response.data.nameHost,
                    systemHost: response.data.systemHost,
                    dateHost: response.data.dateHost,
                    timeProcessService: response.data.timeProcessService,
                    message: response.data.message,
                    hostOS: response.data.hostOS,
                    hostType: response.data.hostType,
                    hostArch: response.data.hostArch
                });
                // guardamos en MongoDB
                // await log.save();
                console.log('Ha sido guardado su log');

            }).catch((error) => {
                console.log(error);
                res.json(error.message);
            })
        });

    }

    start(): void {
        console.log('host port ' + this.port || process.env.PORT_HOST);
        this.app.listen(this.port || process.env.PORT_HOST, function () {
            console.log('app listening!');
        });
    }
}

const server = new Server();
server.start();
