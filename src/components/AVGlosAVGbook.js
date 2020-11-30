import React, { useEffect, useState } from 'react'
import {avgLOS} from '../data/average-length-of-stay-YR'
import {avgBookingValue} from '../data/average-booking-value-YR'
import {reducedValue,filterbyDate,combineData} from '../Helper/helpers'
import {  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Brush, AreaChart, Area, } from 'recharts'


export const AVGLOSvsBOOK=(props)=>{
  
    const [data, setData]= useState([])
    const [avglos, setAvgLos]= useState(0)
    const [avgbvalue, setBValue]= useState(0)
    const range = props.range

    useEffect(() => {

    const getData = async()=>{
      const final= await combineData(avgLOS,avgBookingValue)
      const filteredData = filterbyDate(final, range)
      const resLOS= await parseInt(reducedValue(filteredData,'los'))
       const resBvalue = await parseInt(reducedValue(filteredData,'bookingValue'))
       setData(filteredData)
      setAvgLos(resLOS)
      setBValue(resBvalue)
      return filteredData


    }
    getData()
}, [range])
return (
  <div >
    <h5>Aggregated AVG los:{avglos} days</h5>
    <LineChart
      width={580}
      height={300}
      data={data}
      syncId="anyId"
      margin={{
        top: 10, right: 20, left: 0, bottom: 5,
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="date" />
      <YAxis />
      <Tooltip />
      <Line type="monotone" dataKey="los" stroke="#82ca9d" fill="#82ca9d" />
      <Brush />
    </LineChart>
    
    <AreaChart
      width={580}
      height={300}
      data={data}
      syncId="anyId"
      margin={{
        top: 10, right: 20, left: 0, bottom: 5,
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Area type="monotone" dataKey="bookingValue" stroke="#82ca9d" fill="#82ca9d" />
    </AreaChart>
    <h5>Aggregated AVG booking value:{avgbvalue}$</h5>
  </div>
)

}