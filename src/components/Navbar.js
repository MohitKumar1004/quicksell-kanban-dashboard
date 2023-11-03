import React from 'react'

// components
import DropDownList from '../utils/DropDownList'
import DisplaySelection from '../utils/DisplaySelection'

// css
import '../styles/Navbar.css'
import '../styles/Box.css'

export default function Navbar({ group, order, setGroup, setOrder }) {

    const orderArray = [
        {
            "name": "By Title",
            "value": 0
        },
        {
            "name": "By Priority",
            "value": 1
        }
    ]

    const groupArray = [
        {
            "name": "By Status",
            "value": 0
        },
        {
            "name": "By User",
            "value": 1
        },
        {
            "name": "By Priority",
            "value": 2
        }        
    ]

    return (
        <div className="navbar">
            <DropDownList>
                <DisplaySelection title="Grouping" optionArray={groupArray} setState={setGroup} state={group}/>
                <DisplaySelection title="Ordering" optionArray={orderArray} setState={setOrder} state={order}/>
            </DropDownList>
        </div>
    )
}
