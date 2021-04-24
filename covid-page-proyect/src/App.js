import { Switch, Route } from 'react-router-dom'

import './App.css';
import { Home } from './pages/home'
import { NotFound } from './pages/notFound'
import { Login } from './pages/login'
import { singUp } from './pages/sing-up'
import { HospitalDetail } from './pages/detailH'
import { FarmaciaDetail } from './pages/detailFa'
import { FunerariaDetail } from './pages/detailFu'
import { AdminPage } from './pages/adminPage';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/login' component={Login} />
        <Route path='/admin' component={AdminPage} />
        <Route path='/sing-up' component={singUp} />
        <Route path='/detailHospitales/:id' component={HospitalDetail} />
        <Route path='/detailFunerarias/:id' component={FunerariaDetail} />
        <Route path='/detailFarmacias/:id' component={FarmaciaDetail} />
        <Route component={NotFound} />
      </Switch>
    </div>
  );
}

export default App;
