import React from 'react'
import './Products.css'
import Card from '../ProductCard/Card'

function Products({ cardsToDisplay }) {
    return (
        <div className="products-container">
            {cardsToDisplay && cardsToDisplay.map(card => {
                return <Card {...card} key={card.id}/>
            })}
        </div>
    )
}

export default React.memo(Products)