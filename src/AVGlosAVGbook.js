import React, { useEffect, useState } from 'react'
import {avgLOS} from './data/average-length-of-stay-YR'
import {avgBookingValue} from './data/average-booking-value-YR'
import { Line,LineChart, CartesianGrid, XAxis, YAxis, Tooltip, Legend, Bar,AreaChart,Area  } from 'recharts'
const reducedValue = (arr) => {
    return arr.reduce((prev, cur) => {
      return { los: parseInt(prev.los + cur.los / (arr.length - 1)),
        bookingValue:parseInt(prev.bookingValue + cur.bookingValue / (arr.length - 1)) }
    })
  }

export const AVGLOSvsBOOK=()=>{
    const range = ['2020-01-15', '2020-08-15']
    const [data, setData]= useState([])
    const [avglos, setAvgLos]= useState({})
    const [avgbvalue, setBValue]= useState({})

    useEffect(() => {
    const combineData=(arr1,arr2)=>{
        const final=[]

       const rezy = arr1.forEach(item1=> arr2.forEach(item2 => {
            if(item1.date === item2.date){
                const bookingValue = item2.bookingValue
                const newObj= {...item1,bookingValue:bookingValue}
                final.push(newObj) 
            }
        }))
        const res= reducedValue(final)
        console.log(res)
        setAvgLos(res)
        setBValue(res)
        setData(final)
        return final
        
        
    }
    combineData(avgLOS,avgBookingValue)
}, [])


return (
    <div>
    <h4>Aggregated AVG los is {avglos.los} days</h4>
    <h4>Aggregated AVG booking value is ${avgbvalue.bookingValue}</h4>
   
<LineChart width={1200} height={450} data={data}
  margin={{ top: 5, right: 30, left: 20, bottom: 20 }}>
  <CartesianGrid strokeDasharray="3 3" />
  <XAxis dataKey="date" />
  <YAxis />
  <Tooltip />
  <Legend />
  <Line type="monotone" dataKey="los" stroke="#8884d8" />
  <Line type="monotone" dataKey="bookingValue" stroke="#82ca9d" />
</LineChart>
</div>
)

}