import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {BrowserRouter , Switch, Route } from 'react-router-dom'
import App from './pages/Home';
import CadastroVideo from './pages/cadastro/Video/index'
import CadastroCategoria from './pages/cadastro/categoria';
const pagina404 =  () => (<div> pagina 404 </div>)

ReactDOM.render(
  <BrowserRouter>
    <Switch>  
      < Route path="/"  component={App} exact/>
      < Route path="/cadastro/video"  component={CadastroVideo} exact/>
      < Route path="/cadastro/categoria"  component={CadastroCategoria} exact/>
      < Route  component={pagina404 }/>
      {/* 
      <CadastroCategoria />  */}
    </Switch> 
  </BrowserRouter>,
  document.getElementById('root')
);



