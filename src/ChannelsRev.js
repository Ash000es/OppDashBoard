import React, { useCallback, useEffect, useState } from 'react'
import { tripleValuesCompare } from './data/bookings-revenue-data'
import { makeStyles } from '@material-ui/core/styles'
import { PieChart, Pie, Tooltip,Sector, Cell } from 'recharts'
const useStyles = makeStyles((theme) => ({
  root: {
    'width': 640,
    'height': 400,
    margin: '1rem auto',
    display: 'flex',
    justifyContent: 'flex-start'
  },
  info: {
    width: '45%',
    marginTop:'4rem',
    paddingLeft: '2rem',
    color:'grey',
    fontWeight:550
    
  },
  chart: {
    width: '65%'
  },
}))
const reducedValue = (arr) => {
  return arr.reduce((prev, cur) => {
    return { revenue: parseInt(prev.revenue + cur.revenue) }
  })
}

export const ChannelsRev = () => {
  const classes = useStyles()
  const [data, setData] = useState([])
  const [totalrev, setTotalRev] = useState({})
  const [channels, setChannels] = useState([
    { name: 'Airbnb', value: 452500 },
    { name: 'Booking', value: 206250 },
    { name: 'Expedia', value: 206250 },
    { name: 'Vrbo', value: 40000 }
  ])

  useEffect(() => {
    function getData(arr) {
      setData(arr)
      const res = reducedValue(arr)
      setTotalRev(res)
    }
    getData(tripleValuesCompare)
  }, [])



  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({
  cx, cy, midAngle, innerRadius, outerRadius, percent, index,
}) => {
   const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};
  return (
    <div className={classes.root}>
      <div className={classes.info}>
        <h5>Aggregated revenue:</h5><p>{totalrev.revenue}$</p>
        <h5>Breakdown:</h5>
          {channels.map((chan) => {
            return (
              <ul chan={chan} key={chan.name}>
                <li style={{ listStyle: 'none' }}>
                  {chan.name}:{chan.value}$
                </li>
              </ul>
            )
          })}
        
      </div>
      <div className={classes.chart}>
        <PieChart width={500} height={400} paddingAngle={40}  >
      
          <Pie
            data={data}
            dataKey="revenue"
            nameKey="month"
            cx="50%"
            cy="50%"
            outerRadius={75}
            fill="#8884d8"
            
          />
          <Pie
          data={channels}
          cx="50%"
            cy="50%"
          labelLine={false}
          label={renderCustomizedLabel}
          innerRadius={100}
            outerRadius={150}
          fill="#8884d8"
          nameKey="name"
          dataKey="value"
        >
          {
            data.map((entry, index) => <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />)
          }
        </Pie>
         <Tooltip />
        </PieChart>
      </div>
    </div>
  )
}
