import './Contact.css'

interface UserProps{
    username: string
}
export default function Contact({username}: UserProps){   
    return (
        <>
                    <div className='Home-contact'>
                        <div className="Home-contact-img">
                            <img src="" alt="" id='Home-contact-img-user'/>
                        </div>
                        <div className='Home-contact-name'>
                            <p>{username}</p>
                            <div className='Home-contact-leastMenssage'>
                            ✔✔ vlw
                            </div>
                        </div>
                    </div>
        </>
    )
}