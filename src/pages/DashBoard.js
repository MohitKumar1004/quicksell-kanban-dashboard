import React, { useEffect, useState } from 'react'   
import axios from 'axios'

// components
import Navbar from '../components/Navbar'
import Board from '../components/Board'

// css
import '../styles/DashBoard.css'

// hooks
import { useOptionSelector } from '../hooks/useOptionSelector' 

export default function DashBoard() {

  // Defining states
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

  // Saving group and order type to localStorage
  useEffect(() => {
      localStorage.setItem('group', group)
      localStorage.setItem('order', order)
  },[group,order])

  // Creating fetch api function to fetch api using axios
  const fetchData = async() => {
    try {
        const apiData = await axios.get('https://api.quicksell.co/v1/internal/frontend-assignment')
        setData(apiData.data)
    }
    catch(error) {
        console.error(error)
    }
  }

  // Fetching api dynamically
  useEffect(() => {
    fetchData()
  },[])

  // Setting result with grouping and sorting for display of fetched data using custom useOptionSelector hook
  useEffect(() => {
    setResult(Object.entries(orderTickets(order, groupTickets(group, data.tickets, data.users))))
  },[data, group, order, orderTickets, groupTickets])

  return (
    <div className="dashboard">
      <Navbar group={group} order={order} setGroup={setGroup} setOrder={setOrder}/>
      <Board data={result}/>
    </div>
  )
}
