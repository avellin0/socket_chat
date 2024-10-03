import { useState } from 'react'
import './Contact.css'
import { useNavigate} from 'react-router-dom'

interface UserProps{
    username?: string,
    leastMessage?: boolean,
    fixed?: boolean,
    name: string|undefined
}
    


export default function Contact({name,leastMessage}: UserProps){   

    const [userId , setUserId] = useState<number[]>([0])
    const navigate = useNavigate()



    const ViewMessageWithThisFriend = () => {
        
        navigate(`/Home/${userId}`)
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
                                {leastMessage? "✔✔ vlw" : ""}
                            </div>
                        </div>
                    </div>
        </>
    )
}

