import './Home.css'
import Contact from './Home-Contacts/Contact'
export default function Home(){
    return (
        <>
           <div className="Home-body">
                <div className="Home-contacts-scope">
                    <Contact username={'John'} leastMessage={true} />
                </div>
                <div className='Home-chat'>
                    <div className='Home-chat-header' >
                        <Contact username={"John"}/>                        
                    </div>

                    <div className="Home-chat-real-time"></div>

                    <div className="Home-chat-send-message">
                        <input type="text" name="" id="Home-chat-text-area" placeholder='Send a message to your friend'/>
                        <div className='button'>Enviar</div>
                    </div>

                </div>
            
            </div>
        </>
    )
}