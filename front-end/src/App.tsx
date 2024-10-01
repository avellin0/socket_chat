import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Login from './components/Login/Login';
import Home from './components/Home/Home';
import NewContact from './components/Contact/NewContact';
import { useState } from 'react';
function App() {

  const [friend, setFriend] = useState<string[]>([])

  const addFriend = (name: string) => {
    setFriend([...friend, name])
  }

 

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login/>} />
        <Route path="/Home" element={<Home friends={friend}/>} />
        <Route path="/Home/:username" element={<Home friends={friend}/>} />
        <Route path="/AddContact" element={<NewContact addFriend={addFriend}/>}/>
      </Routes>
    </Router>
  );
}

export default App;
