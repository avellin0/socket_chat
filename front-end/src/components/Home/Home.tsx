import { useRef, useState , useEffect} from 'react'
import './Home.css'
import Contact from './Home-Contacts/Contact'
import socket from '../socket'
import { usernameLogin } from '../Login/Login'

type TypeMessage = {
    message: string,
    author: string
}

export default function Home(){

    const messageRef = useRef<HTMLInputElement>(null)
    const [messageList, setMessageList] = useState<TypeMessage[]>([])
    const [username, setUsername] = useState("")

    useEffect(() => {
        const handleMessage = (data: TypeMessage) => {
            setMessageList((current) => [...current, data])
        }

        socket.on('message', handleMessage)

        socket.on('set_username', data => {
            console.log("Username recebido:", data);
            setUsername(data)
        })

        return () => { 
            socket.off('message', handleMessage) , 
            socket.off('set_username') 
        }

    }, [])

    const handleSubmit = () => {
        
        if(messageRef.current === null) return 
            const message = messageRef.current.value
        
        if(!message.trim()) return 
        
        socket.emit('send_message', message)
        
        cleanInput()
        console.log(message); 
        }   

    const cleanInput= () => {
        if(messageRef.current){
            messageRef.current.value = ""
        }
    }

    return (
        <>
           <div className="Home-body">
                <div className="Home-contacts-scope">
                    <Contact username={'John'} leastMessage={true} />
                </div>
                <div className='Home-chat'>
                    <div className='Home-chat-header' >
                        <Contact username={"John"}/>                        
                    </div>

                    <div className="Home-chat-real-time">
                        <div className='Home-chat-messages'>
                        {
                            messageList.map((message, index) => {
                            console.log(`message.author: ${message.author}, username: ${username}`);
                            return (
                                <p 
                                    key={index} 
                                    className={message.author.trim() === usernameLogin? 'main-user-message' : 'guest-user-message'}
                                >
                                    {message.author}: {message.message}
                                </p>
        )
    })
}
                                               
                        </div>
                    </div>

                    <div className="Home-chat-send-message">
                        <input type="text" id="Home-chat-text-area" placeholder='Send a message to your friend' ref={messageRef}/>

                        <div className='button' onClick={() => handleSubmit()}>Enviar</div>
                    </div>

                </div>
            
            </div>
        </>
    )
}

   