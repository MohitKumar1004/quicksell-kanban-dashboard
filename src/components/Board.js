import React, { useEffect, useState } from 'react'
import '../styles/Board.css';
import Columns from './Columns';

export default function Board({ data }) {

    const [animate, setAnimate] = useState(false)

    useEffect(() => {
        setAnimate(true)
        const timeout = (() => {
            setAnimate(false)
        }, 1000)
        return (() => clearTimeout(timeout))
    }, [data])

    return (
        <div className={`board ${animate?'slide-in':''}`}>
            {
                data.map((data,key) => {
                    return (<Columns key={key} data={data}/>)
                })   
            }
        </div>
    )
}
