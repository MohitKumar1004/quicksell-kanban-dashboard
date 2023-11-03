import React, { useEffect, useRef } from 'react'
import '../styles/Selection.css'

export default function DisplaySelection({ title, optionArray, setState, state }) {

    var id=0;

    const selectDropdown = useRef(null)

    useEffect(() => {
        selectDropdown.current.value = state
    }, [state])

    return (
        <div className="select-area">
            <label className='select-title' htmlFor="order">{title}:&nbsp;&nbsp;&nbsp;&nbsp;</label>
            <select ref={selectDropdown} className='box' name="order" onChange={(evt) => setState(evt.target.value)}>
                {
                    optionArray.map((element) => {
                        id++;
                        return (<option key={id} className='box' value={element.value}>{element.name}</option>)
                    })
                }
            </select>
        </div>
    )
}
