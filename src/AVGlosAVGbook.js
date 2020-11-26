import React, { useEffect, useState } from 'react'
import {avgLOS} from './data/average-length-of-stay-YR'
import {avgBookingValue} from './data/average-booking-value-YR'
import {reducedValue,filterbyDate,combineData} from './Helper/helpers'
import {  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, Brush, AreaChart, Area, } from 'recharts'


export const AVGLOSvsBOOK=(props)=>{
    const range = props.range
    const [data, setData]= useState([])
    const [avglos, setAvgLos]= useState(0)
    const [avgbvalue, setBValue]= useState(0)

    useEffect(() => {

    const getData = async()=>{
      const final= await combineData(avgLOS,avgBookingValue)
      const resLOS= await parseInt(reducedValue(final,'los'))
       const resBvalue = await parseInt(reducedValue(final,'bookingValue'))
       setData(final)
      setAvgLos(resLOS)
      setBValue(resBvalue)
      return final


    }
    getData()
}, [])
return (
  <div style={{width:640}}>
    <h4>Aggregated AVG los is {avglos} days</h4>
    <LineChart
      width={600}
      height={250}
      data={data}
      syncId="anyId"
      margin={{
        top: 10, right: 30, left: 0, bottom: 0,
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="date" />
      <YAxis />
      <Tooltip />
      <Line type="monotone" dataKey="los" stroke="#82ca9d" fill="#82ca9d" />
      <Brush />
    </LineChart>
    <h4>Aggregated AVG booking value is ${avgbvalue}</h4>
    <AreaChart
      width={600}
      height={250}
      data={data}
      syncId="anyId"
      margin={{
        top: 10, right: 30, left: 0, bottom: 0,
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Area type="monotone" dataKey="bookingValue" stroke="#82ca9d" fill="#82ca9d" />
    </AreaChart>
  </div>
)

}