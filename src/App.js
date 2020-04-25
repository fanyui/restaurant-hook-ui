import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom'
import Home from './component/Home'
import Dashboard from './component/Dashboard'
import Nav from './component/Nav'
import AllRestaurant from './component/AllRestaurants';
import RestaurantDetail from './component/RestaurantDetail';
import Callback from './component/Callback';

import createHistory from 'history/createBrowserHistory'
import Auth from './auth/Auth'
const history = createHistory()

const auth =new Auth(history)

const handleAuthentication = (props) => {
  const location = props.location
  if (/access_token|id_token|error/.test(location.hash)) {
    auth.handleAuthentication()
  }
}

function App() {
  // const [ auth, setAuth] = useState(new Auth(history))
  return (
    <Router history={history}>
      < >
        <div className='container'>
          <Nav auth={auth}/>
          <div>
            <Route path='/' exact component={Home} />
            <Route path='/dashboard' exact render={(props) => <Dashboard {...props} auth={auth} />} />
            <Route path='/restaurant' exact render={(props) => <AllRestaurant {...props} auth={auth} />} />
            <Route path='/restaurant/:restaurantId' exact render={(props) => <RestaurantDetail {...props} auth={auth} />} />
            <Route
              path="/callback"
              render={props => {
              handleAuthentication(props)
                return <Redirect to='/' />
              }}
            />
          </div>
        </div>
      </>
    </Router>
  );
}

export default App;
