import React, { useEffect } from 'react'
import {Redirect} from 'react-router-dom'
function Callback() {
    
    useEffect(() =>{
        let id = setTimeout(() => () => <Redirect to="/restaurant" />, 1000)
        return () => { clearTimeout(id)}
    },[] )
    return (<Redirect to="/restaurant" />
    )
}

export default Callback
