import React, { useEffect, useState } from 'react'
import { tripleValuesCompare } from './data/bookings-revenue-data'
import { PieChart,Pie, Tooltip  } from 'recharts'

  
  const Channels=[
      {name:'Airbnb', value:100000},
      {name:'Booking', value:40000},
      {name:'Expedia', value:20000}
    ]
export const ChannelsRev = () => {
  const [data, setData] = useState([])

  useEffect(() => {
      function getData(){
        setData(tripleValuesCompare)
      }
      getData()
      console.log(data.Channels,'pp')


}, [])
  return (
    <div>
      <h4>Aggregated value of revenue is </h4>
      <h4> Break down per channel is {Channels.map(chan=>{
          return(
          <ul chan={chan} key={chan.name}>
           <li>{chan.name}:{chan.value}$</li>   
          </ul>
       ) })}</h4>
      <PieChart width={1200} height={550}>
      <Tooltip/>
  <Pie data={data} dataKey="revenue" nameKey="month" cx="50%" cy="50%" outerRadius={100} fill="#8884d8" />
  
  <Pie data={Channels} dataKey="value" nameKey="name" cx="50%" cy="50%" innerRadius={120} outerRadius={160} fill="#82ca9d" label />
</PieChart>
   
    </div>
  )
}