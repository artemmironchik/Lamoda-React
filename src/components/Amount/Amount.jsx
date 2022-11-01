import React from 'react'
import './Amount.css'

function Amount({ amount }) {
    return (
        <div className="amount-container">
            <p>Всего товаров: { amount }</p>
        </div>
    )
}

export default Amount