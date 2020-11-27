import React, { useEffect, useState } from 'react'
import { parse, Papa } from 'papaparse'
import { readString } from 'react-papaparse'
import { ChannelOpp } from './ChannelOpp'
import { AverageDaily } from './AveragDaily'
import { AVGLOSvsBOOK } from './AVGlosAVGbook'
import { TripleValueComp } from './TripleValuesComp'
import { ChannelsRev } from './ChannelsRev'
import Container from '@material-ui/core/Container'
import CssBaseline from '@material-ui/core/CssBaseline'
import { HealthMeter } from './HealthMeter'
import {DateSelection} from './DatePicker'
import './App.css'
import { makeStyles } from '@material-ui/core/styles'


const useStyles = makeStyles((theme) => ({
  root:{
    // display:'flex',
    // alignContent:'row'
    width:'100vh',
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    border:'1px red #1890ff',
    backgroundColor:'#e6f7ff',
    borderRadius:'1.25rem'
   

  },
  dateCon:{
    width:'100%'
  },
  headline:{
    margin:'4rem',
    backgroundColor:'#91d5ff',
    width:600,
    paddingTop:'1rem',
    paddingBottom:'1rem',
    borderRadius:'1.25rem'

  },
  zero:{
    width:'100%',
    // border:'1px blue solid',
    backgroundColor:'white',
    borderRadius:'1.25rem',
    marginTop:'1.25rem'
    
  },
  first:{
    display: 'flex',
    justifyContent: 'center',
    margin:'2rem',
    border:'1px green solid'

  },
  secound:{
    margin:'2rem',
    border:'1px black solid'

  },
  third:{
    // margin:'2rem',
    border:'1px purple solid'

  },
  fourth:{
    // margin:'2rem',
    border:'1px yellow solid'

  },
  thirdfourthContainer:{
    display: 'flex',
    border:'1px orange solid',
    width:1280,
    marginBottom:'4rem'
  }
}))
export default function App() {

 
  const classes = useStyles()

  const [stay, setStay] = useState(['2020-01-01', '2020-12-31']
  )
  const handleDateChange = (NewDate1) => {
    const checkIn = NewDate1[0]
    const checkOut = NewDate1[1]
    console.log(NewDate1,'date')
    setStay(NewDate1)
  }

  return (
    <React.Fragment>
      <CssBaseline />

      <Container fixed className={classes.root}>
        <div className={classes.headline}><h2>Account Management dashboard</h2></div>
        <div className={classes.dateCon}><DateSelection onChange={handleDateChange}/></div>
        
        
        <div className={classes.zero}><HealthMeter /></div>
        
        
        <div className={classes.first}>
        <div className={classes.secound}><ChannelsRev /></div>
        <div style={{border:'3px solid blue'}}><ChannelOpp /><ChannelOpp /></div>
        </div>
        <div className={classes.thirdfourthContainer}>
        <div className={classes.third}><AVGLOSvsBOOK range= {stay}/></div>
        <div className={classes.fourth}>
        <div><AverageDaily range= {stay}/></div>
        <div> <TripleValueComp /></div>
        </div>
        </div>

       
      </Container>
    </React.Fragment>
  )
}
