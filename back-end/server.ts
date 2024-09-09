import express from "express"
import cors from 'cors'
import http from 'http'
import {Socket, Server} from 'socket.io'

const app = express()
app.use(cors())

const server = http.createServer(app)

const io = new Server(server,{
    cors: {
        origin: "http://localhost:5173",
        methods: ['GET','POST']
    }
})

io.on('connection', (socket: Socket) => {
    console.log("Usuario conectado");
    
    socket.on('set_username', username => {
        console.log("Bem vindo(a):", username);
    })
})


server.listen(3000, () => {
    console.log('server is running')
})