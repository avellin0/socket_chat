import './NewContact.css'
import { useRef } from 'react'
import { useNavigate } from 'react-router-dom'

var friend = ""
export default function NewContact(){

    const friendContact = useRef<HTMLInputElement>(null)

    const navigate = useNavigate()
    const handleSubmit = () => {
        try{
            if(friendContact.current === null) return
                const friendName = friendContact.current?.value
            
                if(friendName.trim()) return
                
                friend = friendName
                console.log("nome do amigo", friendName);

            navigate('/Home')

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
                    <button onClick={() => handleSubmit()}>Adicionar</button>
                </div>
            </div>
        </>
    )
}

export {friend}

