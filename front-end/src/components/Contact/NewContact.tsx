import './NewContact.css'
import { useRef } from 'react'
import socket from '../socket'
export default function NewContact(){

    const friendContact = useRef<HTMLInputElement>(null)

    const handleSubmit = () => {
        try{
            const friendName = friendContact.current?.value
            console.log("nome do amigo", friendName);

            socket.emit('new_contact', friendName)

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


// agora so preciso manipular esse envio e enviar no chat !