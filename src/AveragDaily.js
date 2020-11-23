import React, { useEffect, useState } from 'react'
import { data } from './data/average-daily-data'
import { BarChart, CartesianGrid, XAxis, YAxis, Tooltip, Legend, Bar } from 'recharts'

const range = ['2020-01-15', '2020-08-15']
const sortData = (data) => {
  const final = []
  data.forEach((dat) => {
    const split = dat.date.split('-')
    const months = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12']
    if (split[1] === '01') {
      final.push(dat)
    }
  })
  return final
}
const reducedValue = (arr) => {
  return arr.reduce((prev, cur) => {
    return { rate: parseInt(prev.rate + cur.rate / (arr.length - 1)) }
  })
}

function filterbyDate(arr1, range) {
  const min = range[0]
  const max = range[1]
  const results = arr1.filter((dat) => {
    const firstrange = dat.date
    const secoundrange = dat.date
    if (firstrange >= min && secoundrange <= max) {
      return dat
    }
  })
  return results
}

export const AverageDaily = () => {
  const [rows, setRows] = useState([])
  const [redAmount, setRedAmount] = useState({})
  useEffect(() => {
    function getData(data) {
      const first = filterbyDate(data, range)
      const secound = reducedValue(first)
      console.log(secound)
      setRows(first)
      setRedAmount(secound)
      return first
    }
    const res = getData(data)
   
  }, [])

 

  return (
    <div className="App">
      <h4>`Average daily rate over the period displyes is ${redAmount.rate}` </h4>
      <BarChart
        width={1200}
        height={450}
        data={rows}
        margin={{ top: 5, right: 5, bottom: 5, left: 5 }}
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
