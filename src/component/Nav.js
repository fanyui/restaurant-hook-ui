
import React from 'react'
import { NavLink } from 'react-router-dom'
// import createHistory from 'history/createBrowserHistory'
// import Auth from '../auth/Auth'
// const history = createHistory()
// const authorize = new Auth(history)

export default function Nav(props) {

    const  handleLogin = () => {
        console.log("Loggin in")
        props.auth.login()
    }
    const  handleLogout = () => {
            console.log("Loggin out", )
            props.auth.logout()
    }

    return (
        <nav className='nav'>
            <ul>
                <li>
                    <NavLink to='/' exact activeClassName='active'>
                        Home
					</NavLink>
                </li>
                {props.auth.isAuthenticated()
                 && <> 
                        <li>
                        <NavLink to='/restaurant' exact activeClassName='active'>
                                View All Restaurant
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to='/dashboard' exact activeClassName='active'>
                                Creat Restaurant
                            </NavLink>
                        </li>
                    </>
                }
              <li>
                {props.auth.isAuthenticated()
                    ? 
                    <NavLink to='/login' onClick={() => handleLogout()} exact activeClassName='active'>
                        Logout
                    </NavLink>
                    :
                    <NavLink to='/login' onClick={() => handleLogin()} exact activeClassName='active'>
                        Login
                    </NavLink>
                }

                </li>
            </ul>
        </nav>
    )

 
}

