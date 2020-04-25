import React, { useState } from "react"
import { Link } from 'react-router-dom'
import { TiArrowBackOutline } from 'react-icons/ti'
import { TiHeartOutline } from 'react-icons/ti'
import { TiHeartFullOutline } from 'react-icons/ti'
import { formatDate } from '../utils'
function CardRestaurant(props){
    const [likes, setLikes] = useState(false)
    return (
        <Link to={`/restaurant/${props.restau.restaurantId}`} className="restaurant-item">
            <div className="restaurant-info">
                <div>
                    <span> {props.restau.name} </span>
                    <div> {formatDate(props.restau.createAt)} </div>
                    <p> {props.restau.description}
                        <br />
                        <span>
                            {props.restau.name} 
                        </span>
                    </p>
                </div>
                <div className='restaurant-icons'>
                    <TiArrowBackOutline className='restaurant-icon' />

                    <button className='heart-button' onClick={() => setLikes(true)}  >
                        {likes === true ? <TiHeartOutline color='#e0245e' className='restaurant-icon' />
                            :
                            <TiHeartFullOutline className='restaurant-icon' />
                        }
                    </button>
                    <span> {props.restau.location} 1</span>
                </div>
            </div>
        </Link>

    )
}

export default CardRestaurant