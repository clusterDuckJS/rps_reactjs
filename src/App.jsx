
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/footer/Footer';
import Home from './home/Home';
import Game from './pages/game/Game';



function App() {

  return (
    <div >
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/game' element={<Game />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
