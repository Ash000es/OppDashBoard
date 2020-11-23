import React, { useEffect, useState } from 'react'
import {avgLOS} from './data/average-length-of-stay-YR'
import {avgBookingValue} from './data/average-booking-value-YR'
import { Line,LineChart, CartesianGrid, XAxis, YAxis, Tooltip, Legend,  } from 'recharts'


export const AVGLOSvsBOOK=()=>{

    const [data, setData]= useState([])
    useEffect(() => {
    const combineData=(arr1,arr2)=>{
        const final=[]

       const rezy = arr1.forEach(item1=> arr2.forEach(item2 => {
            if(item1.date === item2.date){
                // console.log(item1.date === item2.date)
                const bookingValue = item2.bookingValue
                const newObj= {...item1,bookingValue:bookingValue}
                // console.log(newObj)
                final.push(newObj) 
            }
        }))
        console.log(final,'ppp')
        setData(final)
        return final
        
        
    }
    combineData(avgLOS,avgBookingValue)
}, [])


return (
    <div>
<LineChart width={1200} height={450} data={data}
  margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
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