// import { useRef, useState , useEffect} from 'react'
import './Home.css'
// import socket from '../socket'
// import { usernameLogin } from '../Login/Login'
import AddContact from "../../addContact.png"
import { useNavigate} from 'react-router-dom'
import Contact from './Home-Contacts/Contact'

// import Contact from './Home-Contacts/Contact'

// type TypeMessage = {
//     message: string,
//     author: string
// }

interface FriendProps{
    friends: string[]
}

export default function Home({friends}: FriendProps){

    // const {username} = useParams()
    // const messageRef = useRef<HTMLInputElement>(null)
    // const [messageList, setMessageList] = useState<TypeMessage[]>([])

   
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
                                friends.map((friend, index) => <Contact key={index} name={friend}/>)
                               )
                            }
                </div>
                
                <div className='Home-chat'>
                    
                </div>
            
            </div>
        </>
    )
}

// useEffect(() => {
//     const handleMessage = (data: TypeMessage) => {
//         setMessageList((current) => [...current, data])
//     }

//     socket.on('message', handleMessage)

//     socket.on('set_username', data => {
//         console.log("Username recebido:", data);
//         setUserName(data)
//     })

//     return () => { 
//         socket.off('message', handleMessage) , 
//         socket.off('set_username') 
//     }

// }, [])

// const handleSubmit = () => {
    
//     if(messageRef.current === null) return 
//         const message = messageRef.current.value
    
//     if(!message.trim()) return 
    
//     socket.emit('send_message', message)
    
//     cleanInput()
//     console.log(message); 
//     }   

// const cleanInput= () => {
//     if(messageRef.current){
//         messageRef.current.value = ""
//     }
// }