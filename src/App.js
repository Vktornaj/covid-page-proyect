import { Switch, Route } from 'react-router-dom'

import './App.css';
import { Home } from './pages/home'
import { NotFound } from './pages/notFound'
import { Login } from './pages/login'
import { singUp } from './pages/sing-up'

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/login' component={Login} />
        <Route path='/sing-up' component={singUp} />
        <Route component={NotFound} />
      </Switch>
    </div>
  );
}

export default App;
