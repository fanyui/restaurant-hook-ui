import React, { useState } from "react"
import { Link } from 'react-router-dom'
import { TiArrowForwardOutline } from 'react-icons/ti'
import { TiHeartOutline } from 'react-icons/ti'
import { TiHeartFullOutline } from 'react-icons/ti'
import { TiDeleteOutline } from 'react-icons/ti'
import { formatDate } from '../utils'
function CardRestaurant(props){
    const [likes, setLikes] = useState(false)
    return (
        <div className="restaurant-item">
            <div className="restaurant-info">
                <div>
                    <span> {props.restau.name} </span>
                    <div> {formatDate(props.restau.createdAt)} </div>
                    <p> {props.restau.description}
                        <br />
                        <span>
                            {props.restau.name} 
                        </span>
                    </p>
                </div>
                <div className='restaurant-icons'>
                    <span> {props.restau.location} </span>
                    <Link to={`/restaurant/${props.restau.restaurantId}`} >
                    <TiArrowForwardOutline className='restaurant-icon' />
                    </Link>

                    <button className='heart-button' onClick={() => setLikes(true)}  >
                        {likes === true ? <TiHeartOutline color='#e0245e' className='restaurant-icon' />
                            :
                            <TiHeartFullOutline className='restaurant-icon' />
                        }
                    </button>
                    <TiDeleteOutline color='#e0245e' onClick={() => props.handleDelete(props.auth.getIdToken(), props.restau.restaurantId )} className='restaurant-icon' />
                </div>
            </div>
        </div>

    )
}

export default CardRestaurant