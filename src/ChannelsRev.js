import React, { useCallback, useEffect, useState } from 'react'
import { tripleValuesCompare } from './data/bookings-revenue-data'
import { makeStyles } from '@material-ui/core/styles'
import { PieChart,Pie, Tooltip  } from 'recharts'
const useStyles = makeStyles((theme) => ({
    root: {
      'max-width': '100%',
      margin: '1rem auto',
      display:'flex',
      justifyContent:'flex-start',
      border:'1px solid black'
    }, 
    info:{
        width:'35%',
        // border:'1px solid green',
        paddingLeft:'5rem'

    },
    chart:{
        width:'65%',
        // border:'1px solid red',
        paddingRight:'2rem'
        
        
    }
  }))
const reducedValue = (arr) => {
    return arr.reduce((prev, cur) => {
      return { revenue: parseInt(prev.revenue+ cur.revenue) }
    })
  }
  
export const ChannelsRev = () => {
    const classes = useStyles()
  const [data, setData] = useState([])
  const [totalrev, setTotalRev] = useState({})
  const [channels, setChannels] = useState([
    {name:'Airbnb', value:452500},
    {name:'Booking', value:206250},
    {name:'Expedia', value:206250},
    {name:'Vrbo', value:40000}
  ])

  useEffect(() => {
      function getData(arr){
        setData(arr)
        const res= reducedValue(arr)
        setTotalRev(res)
        
      }
      getData(tripleValuesCompare)
    



}, [])
  return (
    <div className={classes.root}>
    <div className={classes.info}>
      <h4>Aggregated value of revenue is ${totalrev.revenue} </h4>
      <h4> Break down per channel is {channels.map(chan=>{
          return(
          <ul chan={chan} key={chan.name}>
           <li style={{listStyle:'none'}}>{chan.name}:{chan.value}$</li>   
          </ul>
       ) })}</h4>
       </div>
       <div className={classes.chart}>
      <PieChart width={800} height={450} paddingAngle={40}>
      <Tooltip/>
  <Pie data={data} dataKey="revenue" nameKey="month" cx="50%" cy="50%" outerRadius={100} fill="#8884d8" />
  <Pie data={channels} dataKey="value" nameKey="name" cx="50%" cy="50%" innerRadius={120} outerRadius={160} fill="#82ca9d" label />
</PieChart>
   </div>
    </div>
  )
}