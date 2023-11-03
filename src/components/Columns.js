import React from 'react'
import Cards from './Cards'
import '../styles/Columns.css'

export default function Columns(props) {


    return (
        <div className="columns">
            <div className="">
                <i className="fa fa-check"></i>&nbsp;{props.data[0]}
            </div>
            <div className="cards">
            {
                props.data[1].map((ticket,key) => {
                    return (<Cards key={key} data={ticket}/>)
                })
            }
            </div>
        </div>
    )
}
