import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Home from './component/Home'
import Dashboard from './component/Dashboard'
import Nav from './component/Nav'
function App() {
  return (
    <Router>
      < >
        <div className='container'>
          <Nav />
          <div>
            <Route path='/' exact component={Home} />
            <Route path='/dashboard' component={Dashboard} />
          </div>
        </div>
      </>
    </Router>
  );
}

export default App;
