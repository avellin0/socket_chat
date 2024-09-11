import { useRef, useState , useEffect} from 'react'
import './Home.css'
import Contact from './Home-Contacts/Contact'
import socket from '../socket'

type TypeMessage = {
    message: string,
    author: string
}

export default function Home(){

    const messageRef = useRef<HTMLInputElement>(null)
    const [messageList, setMessageList] = useState<TypeMessage[]>([])

    useEffect(() => {
        const handleMessage = (data: TypeMessage) => {
            setMessageList((current) => [...current, data])
        }

        socket.on('message', handleMessage)

        return () => { socket.off('message', handleMessage) }

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
                        {
                            messageList.map((message,index) => (
                                <p key={index}>{message.author}: {message.message}</p>
                            ))
                        }
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