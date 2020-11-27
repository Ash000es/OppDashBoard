import React, { useEffect, useState } from 'react'
import { tripleValuesCompare } from './data/bookings-revenue-data'
import {
  Line,
  Bar,
  Area,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ComposedChart,
} from 'recharts'

export const TripleValueComp = (props) => {
  const [data, setData] = useState([])

  useEffect(() => {
    function getData() {
      setData(tripleValuesCompare)
    }
    getData()
  }, [])
  return (
    <div>
      <ComposedChart
        width={580}
        height={300}
        data={data}
        margin={{
          top: 10,
          right: 0,
          left: 10,
          bottom: 20,
        }}
      >
        <XAxis dataKey="month" />
        <YAxis />
        <Tooltip />
        <Legend />
        <CartesianGrid stroke="#f5f5f5" />
        <Area dataKey="bookings" type="monotone" fill="#8884d8" stroke="#8884d8" />
        <Bar dataKey="Room nights" barSize={40} fill="#413ea0" />
        <Line dataKey="Booking window" type="monotone" stroke="#ff7300" />
      </ComposedChart>
    </div>
  )
}
