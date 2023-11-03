import React from 'react'
import '../styles/Dropdown.css'

export default function DisplayBox(props) {
    return (
        <div className={`box display ${(props.dropdown) ? 'dropdown' : ''}`}>
            {props.children}
        </div>
    )
}
