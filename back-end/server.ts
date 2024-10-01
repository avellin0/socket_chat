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
        console.log("Username recebido no set_username:", username);
        socket.data.username = username
        console.log("Bem vindo(a):", socket.data.username);
    })

    socket.on('new_friend', data => {
        console.log("Essa é a userInfo:", data);
        io.emit('userInfo', {
            data,
            authorId: socket.data.authorId
        })
    })

    socket.on('send_message', message => {
        console.log("username:", socket.data.username,);
        io.emit('message', {
            message,
            author: socket.data.username,
            authorId: socket.id
        })
    })
})


server.listen(3000, () => {
    console.log('server is running')
})