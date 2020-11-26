import React, { useEffect, useState } from 'react'
import { data } from './data/average-daily-data'
import { BarChart, CartesianGrid, XAxis, YAxis, Tooltip, Legend, Bar } from 'recharts'
import {reducedValue,filterbyDate,groupBy} from './Helper/helpers'


export const AverageDaily = (props) => {
  const [rows, setRows] = useState([])
  const [redAmount, setRedAmount] = useState(0)
  const range = props.range

  useEffect(() => {
    function getData(data) {
      const filteredData = filterbyDate(data, range)
      const total = parseInt(reducedValue(filteredData,'rate'))
      setRows(filteredData)
      setRedAmount(total)
      return filteredData
    }
    const res = getData(data)
   
  }, [])

 

  return (
    <div className="App">
      <h4>Aggregated Average daily rate over the period displyed is ${redAmount} </h4>
      <BarChart
        width={1200}
        height={450}
        data={rows}
        margin={{ top: 20, right: 5, bottom: 20, left: 5 }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="date" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="rate" fill="#8884d8" />
        {/* <Bar dataKey="uv" fill="#82ca9d" /> */}
      </BarChart>
    </div>
  )
}
