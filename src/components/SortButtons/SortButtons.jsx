import React, {useState} from 'react'
import './SortButtons.css'
import { SORTINGS } from '../../utils/constValues'

function SortButtons({setSortingFn}) {
    const [clickedButton, setClickedButton] = useState()
    const handleClick = (name) => {
        setSortingFn(SORTINGS[name])
        setClickedButton(name)
    }
    return (
        <div className="buttons-container">
            {Object.keys(SORTINGS).map((name) => {
                return (
                    <button
                        onClick={() => handleClick(name)}
                        style={{ backgroundColor: name === clickedButton ?  '#f5f5f5' : '#ffffff'}}
                    >
                    {name}
                    </button>

                )
            }
            )}
        </div>
    )
}

export default SortButtons