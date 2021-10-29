import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from './pages/Home'
import Cidade from './pages/Cidade'
import Musica from './pages/Musica'

import './App.css'

function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={ Home } />
          <Route path="/musica" component={ Musica } />
          <Route path="/cidade" component={ Cidade } />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App
