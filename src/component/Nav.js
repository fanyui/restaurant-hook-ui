
import React,{useState} from 'react'
import { NavLink } from 'react-router-dom'
export default function Nav() {
    const [ auth, setAuth ] = useState(true)
    const  handleLogin = () => {
        console.log("Loggin in")
        setAuth(true)
    }
    const  handleLogout = () => {
        setAuth(false)
        console.log("Loggin out", auth)
    }

    return (
        <nav className='nav'>
            <ul>
                <li>
                    <NavLink to='/' exact activeClassName='active'>
                        Home
					</NavLink>
                </li>
                <li>
                    <NavLink to='/dashboard' exact activeClassName='active'>
                        Dashboard
					</NavLink>
                </li>
              <li>
                {
                    auth 
                    ? 
                    <NavLink to='/dashboard' onClick={() => handleLogout()} exact activeClassName='active'>
                        Logout
                    </NavLink>
                    :
                    <NavLink to='/dashboard' onClick={() => handleLogin()} exact activeClassName='active'>
                        Logout
                    </NavLink>
                }

                </li>
            </ul>
        </nav>
    )

 
}

