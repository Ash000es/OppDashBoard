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
    border:'1px red solid'
   

  },
  headline:{
    margin:'4rem'

  },
  zero:{
    width:'100%',
    border:'1px blue solid'
    
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
    width:1280
  }
}))
export default function App() {
 
  const classes = useStyles()
  const range = ['2020-01-15', '2020-10-15']
  return (
    <React.Fragment>
      <CssBaseline />

      <Container fixed className={classes.root}>
        <div className={classes.headline}><h1>Account Management dashboard</h1></div>
        
        
        <div className={classes.zero}><HealthMeter /></div>
        
        
        <div className={classes.first}>
        <div className={classes.secound}><ChannelsRev /></div>
        <div><ChannelOpp /></div>
        </div>
        <div className={classes.thirdfourthContainer}>
        <div className={classes.third}><AVGLOSvsBOOK range= {range}/></div>
        <div className={classes.fourth}>
        <div><AverageDaily range= {range}/></div>
        <div> <TripleValueComp /></div>
        </div>
        </div>

       
      </Container>
    </React.Fragment>
  )
}
