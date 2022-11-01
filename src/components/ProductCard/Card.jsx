import React from 'react'
import './Card.css'

function Card({ name, description, color, price, rating, imageURL}) {

    return (
        <div className="card-container">
            <img className="card-img" src={imageURL} alt={name}/>
            <div className="name">{name}</div>
            <div className="description">{description}</div>
            <div className="description-container">
                <div className="color">Цвет<span>{color}</span></div>
                <div className="price">Стоимость<span>{price}</span></div>
                <div className="rating">Рейтинг<span>{rating}</span></div>
            </div>
        </div>
    )
}

export default Card