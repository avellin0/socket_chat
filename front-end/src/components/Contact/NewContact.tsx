import './NewContact.css'
import { useRef } from 'react'
import { useNavigate } from 'react-router-dom'


interface ContactProps{
    name: string
}

interface NewContactProps {
    addContact: (contact: ContactProps) => void;
}

export default function NewContact({addContact}: NewContactProps){

    const friendContact = useRef<HTMLInputElement>(null)

    const navigate = useNavigate()
    const handleSubmit = () => {
        try{
            if(friendContact.current === null) return
                const friendName = friendContact.current?.value
            
                if(!friendName.trim()) return
                
                console.log("nome do amigo", friendName);

                addContact({name: friendName})

            navigate(`/Home/${friendName}`)

        }catch(err){
            console.log("erro aqui:", err);
        }       
    }

    return (
        <>
            <div className="AddContact-Scope">
                <div className='AddContact-Area'>
                    <h1>Add Contact</h1>
                    <input type="text" placeholder='Nome' className='AddContact-input'/>
                    <input type="text" placeholder='Apelido' className='AddContact-input' ref={friendContact}/>
                    <input type="text" placeholder='numero' className='AddContact-input'/>
                    <button type='submit' onClick={() => handleSubmit()}>Adicionar</button>
                </div>
            </div>
        </>
    )
}


function addContact(arg0: { name: string }) {
    throw new Error('Function not implemented.')
}

