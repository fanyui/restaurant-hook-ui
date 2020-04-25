import React from 'react'
import CreateRestaurant  from "./CreateRestaurant";
function Dashboard(props) {
    return (
        <>
            <div>
                <h1> Dashboard page</h1>
                <CreateRestaurant auth={props.auth}/>
            </div>
        </>
    )
}

export default Dashboard;