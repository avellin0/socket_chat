import './NewContact.css'
import { useRef, useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import socket from '../socket'

interface AddFriendProps{
    addFriend: (name: string) => void
}


export default function NewContact({addFriend}: AddFriendProps){

    const [friend, setFriend] = useState('')
    const [userId, setUserId] = useState<number[]>([])

    const friendContact = useRef<HTMLInputElement>(null)

    const navigate = useNavigate()
    

    const generateId = () => {
        for(let x=0 ; x <0; x++){
            setUserId((current) => [...current, x])
            return userId.pop()
        }    
    } 

    const handleSubmit = () => {
        try{
            if(friendContact.current === null) return
                const friendName = friendContact.current?.value
                
                const userInfo = {
                    friendName,
                    userId: generateId()
                } 
                
                if(!friendName.trim()) return
                
                console.log("nome do amigo", friendName);

                addFriend(friendName)
                
                navigate(`/Home/${1}`)
                setFriend('')


        }catch(err){
            console.log("erro aqui:", err);
        }       
    }

    return (
        <>
            <div className="AddContact-Scope">
                <div className='AddContact-Area'>
                    <h1>Add Contact</h1>
                    <input type="text" placeholder='Nome' className='AddContact-input' title={friend}/>
                    <input type="text" placeholder='Apelido' className='AddContact-input' ref={friendContact}/>
                    <input type="text" placeholder='numero' className='AddContact-input'/>
                    <button type='submit' onClick={() => handleSubmit()}>Adicionar</button>
                </div>
            </div>
        </>
    )
}


