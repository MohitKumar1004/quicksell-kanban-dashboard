import React, { useEffect, useState } from 'react'   
import Navbar from '../components/Navbar'
import '../styles/DashBoard.css'
import Board from '../components/Board'
import axios from 'axios'
import { useOptionSelector } from '../hooks/useOptionSelector'

export default function DashBoard() {

  const [data, setData] = useState({ tickets: [], users: [] })
  const [result, setResult] = useState([])

  const [group, setGroup] = useState(() => {
    if(localStorage.getItem('group') === null) {
        localStorage.setItem('group', 0)
        return 0
    }
    return localStorage.getItem('group')
  })

  const [order, setOrder] = useState(() => {
      if(localStorage.getItem('order') === null) {
          localStorage.setItem('order', 0)
          return 0
      }
      return localStorage.getItem('order')
  })

  const [groupTickets, orderTickets] = useOptionSelector()

  useEffect(() => {
      localStorage.setItem('group', group)
      localStorage.setItem('order', order)
  },[group,order])

  const fetchData = async() => {
    try {
        const apiData = await axios.get('https://api.quicksell.co/v1/internal/frontend-assignment')
        setData(apiData.data)
    }
    catch(error) {
        console.error(error)
    }
}
  useEffect(() => {
    fetchData()
  },[])

  useEffect(() => {
    console.log(group)
    console.log(data.tickets)
    setResult(Object.entries(orderTickets(order, groupTickets(group, data.tickets, data.users))))
    console.log(groupTickets(group, data.tickets, data.users))
    console.log(orderTickets(order, groupTickets(group, data.tickets, data.users)))
  },[data, group, order])

  return (
    <div className="dashboard">
      <Navbar group={group} order={order} setGroup={setGroup} setOrder={setOrder}/>
      <Board data={result}/>
    </div>
  )
}
