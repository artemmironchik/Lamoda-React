import React from 'react'
import './Colors.css'
import { colors } from '../../utils/constValues.js'

function Colors() {
    return (
        <div className="colors-container">
            <div className="colors-text">
                <p>По цвету</p>
            </div>
            <div className="list-of-colors">
                {colors.map(color => 
                    <label>
                        <input type="checkbox"/>
                        {color}
                    </label>
                )}
            </div>
        </div>
    )
}

export default Colors