import './Contact.css'
import { useNavigate } from 'react-router-dom'

interface UserProps{
    username?: string
    leastMessage?: boolean
    fixed?: boolean
}
    
const navigate = useNavigate()

export default function Contact({username,leastMessage}: UserProps){   

    const ViewMessageWithThisFriend = () => {
   
        navigate('/Home/:username')
    }

    return (
        <>
                    <div className='Home-contact' onClick={() => ViewMessageWithThisFriend()}>
                        <div className="Home-contact-img">
                            <img src="" alt="" id='Home-contact-img-user'/>
                        </div>
                        <div className='Home-contact-name'>
                            <p>{username}</p>
                            <div className='Home-contact-leastMenssage'>
                                {leastMessage? "✔✔ vlw" : ""}
                            </div>
                        </div>
                    </div>
        </>
    )
}