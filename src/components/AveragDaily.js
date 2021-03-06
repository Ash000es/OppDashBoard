import React, { useEffect, useState } from 'react'
import { data } from '../data/average-daily-data'
import { BarChart, CartesianGrid, XAxis, YAxis, Tooltip, Bar } from 'recharts'
import { reducedValue, filterbyDate } from '../Helper/helpers'

export const AverageDaily = ({ range }) => {
  const [rows, setRows] = useState([])
  const [redAmount, setRedAmount] = useState(0)

  useEffect(() => {
    function getData(data) {
      const filteredData = filterbyDate(data, range)
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
        margin={{ top: 20, right: 10, bottom: 20, left: 5 }}
      >
        <CartesianGrid strokeDasharray='3 3' />
        <XAxis dataKey='date' />
        <YAxis />
        <Tooltip />
        {/* <Legend style={{marginTop:20}}/> */}
        <Bar dataKey='rate' fill='#8884d8' />
      </BarChart>
    </div>
  )
}
