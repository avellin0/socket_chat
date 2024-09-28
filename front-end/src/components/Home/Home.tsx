import { useRef, useState , useEffect} from 'react'
import './Home.css'
import socket from '../socket'
import { usernameLogin } from '../Login/Login'
import AddContact from "../../addContact.png"
import { useNavigate, useParams} from 'react-router-dom'

import Contact from './Home-Contacts/Contact'

type TypeMessage = {
    message: string,
    author: string
}

interface FriendProps{
    friends: string[]
}

export default function Home({friends}: FriendProps){

    
    const [messageList, setMessageList] = useState<TypeMessage[]>([])


    useEffect(() => {
    const handleMessage = (data: TypeMessage) => {
        setMessageList((current) => [...current, data])
    }

    socket.on('message', handleMessage)

    socket.on('set_username', data => {
        console.log("Username recebido:", data);
    })

    return () => { 
        socket.off('message', handleMessage) , 
        socket.off('set_username') 
    }

}, [])

const messageRef = useRef<HTMLInputElement>(null) 

const handleSubmit = () => {
    if(messageRef.current === null || messageRef.current === undefined) return 
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


    const {username} = useParams()
  
   
    const navigate = useNavigate()


    return (
        <>
           <div className="Home-body">
                <div className="Home-contacts-scope">
                    <div className='Home-Add-Contact' onClick={() => navigate('/AddContact')}>
                        <img src={AddContact} alt="" />
                        <h2>Add contacts</h2>
                    </div>
                            {
                               friends.length === 0? (
                                ""
                               ) : (
                                friends.map((friend, index) => <Contact key={index} name={friend} leastMessage={true}/>)
                               )
                            }
                </div>
                
                <div className='Home-chat'>
                    {username?  (
                        <>
                            <Contact name={username} leastMessage={false}/>
                                <div className='Home-chat-real-time'>
                                    <div className='Home-chat-messages'>
                                        {
                                            messageList.map((message, index) => (
                                                <>
                                                    { message.author === usernameLogin?
                                                        <div className='main-user-message'> 
                                                            <p key={index}>{message.author}: {message.message}</p>
                                                        </div> : ""
                                                    }
                                                    {
                                                     message.author === username? 
                                                        <div className='guest-user-message'>
                                                            <p key={index}>{message.author}: {message.message}</p>
                                                        </div> : ""
                                                   }
                                                </>
                                            ))
                                        }
                                    </div>
                                </div>
                                <div className='Home-chat-send-message'>
                                    <input type="text" name="" id="Home-chat-text-area" ref={messageRef}/>
                                    <button onClick={() => handleSubmit()}>Enviar</button>
                                </div>
                        </>
                        ) : ""}
                </div>
            
            </div>
        </> 
        
    )
}

// Devo usar IDs para me comunicar melhor entre SOCKETs;