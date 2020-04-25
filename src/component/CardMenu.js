import React from 'react'

export default function CardMenu(props) {
    return(
        <div className="restaurant-item" >
            <div className="menu-image">
                <img src={props.menu.imageUrl} className="image"  />
            </div>
            <div className="menu-content">
                <p>
                    {props.menu.description} 
                </p>
                <div className="menu-bottom-text">
                    <span> {props.menu.price}</span> <span> {props.menu.title}</span>
                </div>

            </div>

        </div>
    )
}