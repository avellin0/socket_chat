import { useRef, useState , useEffect} from 'react'
import './Home.css'
import Contact from './Home-Contacts/Contact'
import socket from '../socket'
import { usernameLogin } from '../Login/Login'
import AddContact from "../../addContact.png"
import { useNavigate } from 'react-router-dom'
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

    const navigate = useNavigate()

    return (
        <>
           <div className="Home-body">
                <div className="Home-contacts-scope">
                    <div className='Home-Add-Contact' onClick={() => navigate('/AddContact')}>
                        <img src={AddContact} alt="" />
                        <h2>Add contacts</h2>
                    </div>
                    <Contact leastMessage={true} />
                </div>
                
                <div className='Home-chat'>
                    
                </div>
            
            </div>
        </>
    )
}

   