import React from 'react'
import '../styles/Board.css';
import Columns from './Columns';

export default function Board({ data }) {

    return (
        <div className="board">
        {
            data.map((data,key) => {
                return (<Columns key={key} data={data}/>)
            })
        }
        </div>
    )
}
