import React, { useState, useEffect } from 'react'
import { revdata } from '../data/revData'
import { reducedValue, filterbyDate,formatData } from '../Helper/helpers'
import { BarChart, CartesianGrid, XAxis, YAxis, Tooltip, Legend, Bar } from 'recharts'


export const RevTimeline = (props) => {
  const [rows, setRows] = useState([])
  const [redAmount, setRedAmount] = useState(0)
  const range = props.range

  useEffect(() => {
    function getData(data) {
      const filteredData = filterbyDate(data, range)
      const groupedDates = formatData(filteredData)
      const totalReducedValue = reducedValue(groupedDates,'revenue')
        setRows(groupedDates)
        setRedAmount(totalReducedValue)
    
    }
    getData(revdata)
  }, [range])
  return (
    <div>
      <h5>Aggregated revenue:{redAmount.toFixed()}</h5>
      <BarChart
        width={1200}
        height={500}
        data={rows}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="revenue" fill="#8884d8" />
      </BarChart>
    </div>
  )
}
