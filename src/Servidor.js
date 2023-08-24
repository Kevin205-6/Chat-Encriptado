import { Console } from 'console';
import express from 'express';
import http from 'http'
import { Server as SocketServer } from 'socket.io';


class Servidor {
    constructor() {
        this.app = express();
        this.server = http.createServer(this.app);
        this.io = new SocketServer();
        console.log(process.env.PORT)
    }

    iniciar() {
        this.io.on('connection', socket => {
            console.log('usuario conectado');
            socket.on('enviar', (data) => {
                socket.broadcast.emit('recibir', data)
            });
           
        });
        this.server.listen(process.env.PORT);
    }
}

export default Servidor;
