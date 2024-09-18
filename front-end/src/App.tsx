import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Login from './components/Login/Login';
import Home from './components/Home/Home';
function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login/>} />
        <Route path="/Home" element={<Home/>} />
        <Route path="/Home/:username" element={<Home/>} />
        <Route path="/AddContact"/>
      </Routes>
    </Router>
  );
}

export default App;
