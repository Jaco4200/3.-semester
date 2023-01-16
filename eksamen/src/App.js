import {BrowserRouter, Routes, Route,} from 'react-router-dom';
import Profil from './pages/profil';
import Menu from './pages/menu';
import Home from './pages/home';
import Bekraft from './pages/bekraft';
import Kontakt from './pages/kontakt';
import Update from './pages/update';
import Admin from './pages/admin';
import { Navbar } from './Components/Navbar'
import '../src/scss/style.scss'
import { Footer } from './Components/Footer';
function App() {
  return (
    
    <div className="App">
        <Navbar/>
        <BrowserRouter>
          <Routes>
            <Route path="/Profil" element={<Profil/>}/>
            <Route path="/Menu" element={<Menu/>}/>
            <Route path="/Kontakt" element={<Kontakt/>}/>
            <Route path="/Bekraeft" element={<Bekraft/>}/>
            <Route path="/Admin" element={<Admin/>}/>
            <Route path="/" element={<Home/>}/>
            <Route path='/update/:id' element={<Update/>}/>
        </Routes>
      </BrowserRouter>
      <Footer/>
    </div>
  );
}

export default App;
