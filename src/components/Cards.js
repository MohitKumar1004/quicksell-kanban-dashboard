import React from 'react'
import '../styles/Cards.css'

export default function Cards(props) {
  return (
    <div className="card box">
      <p className="card-id">{props.data.id}</p>
      <p>{props.data.title}</p>
      <div className="icon-group">
        <i className="box tags">
          {props.data.status}
        </i>
        {
          props.data.tag.map((element,key) => {
          return <i key={key} className="box tags">
              <i class="fa-solid fa-circle tags"></i>&nbsp;{element}
            </i>
          })
        }
      </div>
    </div>
  )
}
