import React from 'react'

import Arrow from '../utils/Arrow'

export default function DisplayButton(props) {
  return (
    <button onClick = {props.clickToDropdown} className="box" style={{margin: '0.5vh 2vw'}}>
        Display&nbsp;&nbsp;<Arrow type="down"/>
    </button>
  )
}
