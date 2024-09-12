import './Login.css'
import {useRef} from 'react'
import { useNavigate} from 'react-router-dom'
import socket from '../socket'

var usernameLogin = ""
export default function Login(){

    const usernameRef = useRef<HTMLInputElement>(null)

    const navigate = useNavigate()

    const handleSubmit = async() => {
        if(usernameRef.current === null) return
            const username = usernameRef.current.value;

            if(!username.trim()) return

            usernameLogin = username

            socket.emit('set_username', username)
            console.log("Emitindo set_username com:", username);

            navigate('/Home');
        }

    return (
        <>
            <div className='Login-Body'>
                <h1>Welcome back to your favorite Space</h1>
                <div className='Login-Scope'>
                    <input type="text" className='Login-input' ref={usernameRef}  placeholder="Let's your Username here :) "/>
                    <button className='Login-input-Button' type='submit' onClick={() => handleSubmit() }>Enviar</button>
                </div>

            </div>
        </>
    )
}

export {usernameLogin}