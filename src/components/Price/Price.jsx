import React, {useState, useEffect} from 'react'
import './Price.css'

function Price({ handlePriceChange}) {
    const [minPrice, setMinPrice] = useState(10)
    const [maxPrice, setMaxPrice] = useState(9999)

    const handleChange = e => {
        let { value, min, max } = e.target;
        const validValue = Math.max(Number(min), Math.min(Number(max), Number(value)))

        if (e.target.name === 'minPrice') {
            e.target.classList.remove('invalid')
            if (validValue > maxPrice) {
                e.target.classList.add('invalid')
            }
            setMinPrice(validValue)
            handlePriceChange(validValue, maxPrice)
        } else {
            e.target.classList.remove('invalid')
            if (validValue < minPrice) {
                e.target.classList.add('invalid')
            }
            setMaxPrice(validValue)
            handlePriceChange(minPrice, validValue)
        }
    }

    return (
        <div className="price-container">
            <div className="price-text">
                <p>По цене</p>
            </div>
            <div className="input-number-container">
                <input name='minPrice' type="number" placeholder='от' min='1' max = '9999' onChange={handleChange} value={minPrice}/>
                <p>-</p>
                <input name='maxPrice' type="number" placeholder='до'  min='1' max = '9999' onChange={handleChange} value={maxPrice}/>
            </div>
        </div>
    )
}

export default Price