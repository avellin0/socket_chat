import './Contact.css'
import { useNavigate } from 'react-router-dom'
interface UserProps{
    username?: string,
    leastMessage?: boolean,
    fixed?: boolean,
    name: string
}
    

export default function Contact({name}: UserProps){   
    const navigate = useNavigate()

    const ViewMessageWithThisFriend = () => {
        navigate(`/Home/:${name}`)
    }

   
    return (
        <>
                    <div className='Home-contact' onClick={() => ViewMessageWithThisFriend()}>
                        <div className="Home-contact-img">
                            <img src="" alt="" id='Home-contact-img-user'/>
                        </div>
                        <div className='Home-contact-name'>
                           <p>{name}</p>
                            <div className='Home-contact-leastMenssage'>
                                {name? "✔✔ vlw" : ""}
                            </div>
                        </div>
                    </div>
        </>
    )
}

