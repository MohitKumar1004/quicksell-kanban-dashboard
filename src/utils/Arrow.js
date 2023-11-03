import React from 'react'
import '../styles/Arrow.css'

export default function Arrow(props) {

    return (
        <i className = {`arrow ${props.type}`}></i>
    )
}
