import React from 'react';
import './App.css';
import './styles/botoes.css'
import Footer from './components/Footer';
import Header from './components/Header';
import Inicio from './pages/Inicio.jsx';
import Cadastro from './pages/Cadastro.jsx'
import Tartaruga from './pages/Tartaruga.jsx'
import {Switch, Route, BrowserRouter} from 'react-router-dom'
import DedoDeus from './pages/DedoDeus.jsx';
import Cachoeira from './pages/Cachoeira.jsx';
import Torres from './pages/Torres.jsx';
import Escalavrado from './pages/Escalavrado.jsx';
import Sino from './pages/Sino.jsx';
import Error from './pages/Error.jsx';
import QuemSomos from './pages/QuemSomos';
import FloatButton from './components/FloatButton';

function App() {
  return (
            
    <div className='App'>
      <BrowserRouter>
        <Header/>
            <Switch>
              <Route path = '/' exact>
                <Inicio/>
              </Route>
              <Route path='/cadastro'>  
                <Cadastro/>
              </Route>
              <Route path='/pedradatartaruga'> 
                <Tartaruga/>
              </Route>
              <Route path='/dedodedeus'> 
                <DedoDeus/>
              </Route>
              <Route path='/cachoeiradamacumba'> 
                <Cachoeira/>
              </Route>
              <Route path='/torres'> 
                <Torres/>
              </Route>
              <Route path='/escalavrado'> 
                <Escalavrado/>
              </Route>
              <Route path='/pedradosino'> 
                <Sino/>
              </Route>
              <Route path='/quemsomos'> 
                <QuemSomos/>
              </Route>
              <Route path='*/'> 
                <Error/>
              </Route>
            </Switch>
            <FloatButton/>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}
export default App;
