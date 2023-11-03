import React, { useState } from 'react'

// components
import DisplayButton from '../components/DisplayButton'
import DisplayBox from './DisplayBox'

export default function DropDownList(props) {

    const [dropdown, setDropdown] = useState(true)

    const clickToDropdown = () => {
        if (dropdown) {
            setDropdown(false)
        } else {
            setDropdown(true)
        }
        console.log(dropdown)
    }

    return (
        <div>
            <DisplayButton clickToDropdown={clickToDropdown} dropdown={dropdown}/>
            <DisplayBox dropdown={dropdown}>
                {props.children}
            </DisplayBox>
        </div>
    )
}
