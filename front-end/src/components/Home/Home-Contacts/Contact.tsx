import './Contact.css'
import { friend } from '../../Contact/NewContact'
interface UserProps{
    leastMessage?: boolean
    fixed?: boolean
}


export default function Contact({leastMessage}: UserProps){   


console.log("friend é isso aqui:", friend);


    return (
        <>
                    <div className='Home-contact'>
                        <div className="Home-contact-img">
                            <img src="" alt="" id='Home-contact-img-user'/>
                        </div>
                        <div className='Home-contact-name'>
                            <p>{friend}</p>
                            <div className='Home-contact-leastMenssage'>
                                {leastMessage? "✔✔ vlw" : ""}
                            </div>
                        </div>
                    </div>
        </>
    )
}