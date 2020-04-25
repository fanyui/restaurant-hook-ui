import React, { useEffect, useState } from 'react'
import CardRestaurant from "./CardRestaurant";
import { getRestaurant} from '../api/restaurant'
import { NavLink   } from "react-router-dom";
function AllRestaurant(props) {

    const [restaurants, setRestaurant] = useState([])
    const [processing, setProcessing] = useState(true)
    useEffect(() => {
        const getRestau = async() =>{
            try {
                const result = await getRestaurant(props.auth.getIdToken())
                setRestaurant(result)
            } catch (e) {
                alert('Could not fetch Restaurant: ' + e.message)
            } finally {
                setProcessing(false)
            }
        }
        getRestau();

    },[])
    return (
        <>
            <div className="restaurant">
                {processing && <span> Fetching Restaurants.</span>}
                <h1> AllRestaurant page</h1> 
                <NavLink to='/dashboard' exact activeClassName='active'>
                    <button className="btn"> Create Restaurant</button>
                 </NavLink>
                {restaurants.map((restau, key) => {
                    return <CardRestaurant auth={props.auth} restau={restau} key = {key}/>
                })}
            </div>
        </>
    )
}

export default AllRestaurant;