import './App.css';
import Home from './componente/home';
import Join from './componente/join';
import Create from './componente/create';
import UserGuide from './componente/userGuide';
import AboutUs from './componente/aboutUs';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

function App() {
  
  return(
    <section>
      <Router>
        <Routes>
          <Route path='/' element={<Home/>} exact/>
          <Route path='/join-game' element={<Join/>} exact/>
          <Route path="/create-game" element={<Create/>} exact/>
          <Route path='/user-guide' element={<UserGuide/>} exact/>
          <Route path='/about-us' element={<AboutUs/>} exact/>
        </Routes>
      </Router>
      
    </section>
    
  )

}

export default App;
