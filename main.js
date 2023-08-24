import express from "express";
import morgan from "morgan";
import { Server as SocketServer } from "socket.io";
import http from "http";
import cors from "cors";


const app = express();
const server = http.createServer(app);
const io = new SocketServer(server, {
    cors: {
        origin: "*",
    },
});

app.use(cors());
app.use(morgan("dev"));

io.on("connection", (socket) => {
    console.log("Usuario conectado: " + socket.id);
    socket.on('enviar', (data) => {
        socket.broadcast.emit('recibir', data)
        console.log(data)
    });
});


server.listen(3000, () => {
    console.log("Escuchado puerto: " + 3000);
});