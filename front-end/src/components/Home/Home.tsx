import './Home.css'
import Contact from './Home-Contacts/Contact'
export default function Home(){
    return (
        <>
           <div className="Home-body">
                <div className="Home-contacts-scope">
                    <Contact username={'John'} />
                </div>
                <div className='Home-chat'></div>
            
            </div>
        </>
    )
}