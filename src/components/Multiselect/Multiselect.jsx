import React, { useState } from 'react'
import './Multiselect.css'

function Multiselect({ options, title, onSelect}) {
    const [set, setSet] = useState(new Set())

    const handleSelect = ({ target: { name } }) => {
        set.has(name) ? set.delete(name) : set.add(name)

        const newSet = new Set([...set])
        setSet(newSet)
        onSelect(newSet)
    }

    return (
        <div className="multiselect-container">
            <div className="multiselect-text">
                <p>{title}</p>
            </div>
            <div className="list-of-options">
                {options.map(option => 
                    <label>
                        <input type="checkbox" checked={set.has(option)} name={option} onChange={handleSelect}/>
                        {option}
                    </label>
                )}
            </div>
        </div>
    )
}

export default Multiselect