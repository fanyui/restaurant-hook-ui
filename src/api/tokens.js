import createHistory from 'history/createBrowserHistory'
import Auth from '../auth/Auth'
const history = createHistory()
const authorize = new Auth(history)
export default authorize;