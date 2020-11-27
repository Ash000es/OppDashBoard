import React, { useEffect, useState } from 'react'
import { data } from './data/average-daily-data'
import { BarChart, CartesianGrid, XAxis, YAxis, Tooltip, Legend, Bar } from 'recharts'
import { reducedValue, filterbyDate } from './Helper/helpers'

export const AverageDaily = (props) => {
  const [rows, setRows] = useState([])
  const [redAmount, setRedAmount] = useState(0)
  const range = props.range
  console.log(range,'lol')
 

  useEffect(() => {
    function getData(data) {
      console.log(data,'kk')
      const filteredData = filterbyDate(data, range)
      console.log(filteredData,'pp')
      const total = parseInt(reducedValue(filteredData, 'rate'))
      setRows(filteredData)
      setRedAmount(total)
      return filteredData
    }
     getData(data)
  }, [range])

  return (
    <div>
      <h5>Aggregated AVG daily-rate:{redAmount}$ </h5>
      <BarChart
        width={600}
        height={300}
        data={rows}
        margin={{ top: 20, right: 0, bottom: 20, left: 5 }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="date" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="rate" fill="#8884d8" />
      </BarChart>
    </div>
  )
}
