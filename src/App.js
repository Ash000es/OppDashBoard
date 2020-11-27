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
import { DateSelection } from './DatePicker'
import {filterbyDate} from './Helper/helpers'
import './App.css'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100vh',
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    border: '1px red #1890ff',
    backgroundColor: '#fafafa',
    borderRadius: '1.25rem',
    marginTop:25
  },
  firstCon: {
    width: '100%',
    height: '12rem',
    backgroundColor: '#1890ff',
    color: 'white',
    borderRadius: '1.1rem',
    border: '2px solid black',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  dateCon: {
    width: '100%',
    borderRadius: '1.1rem',
  },
  headline: {
    paddingTop: '0.5rem',
    paddingBottom: '0.5rem',
    border: '2px solid white',
    borderRadius: '1.25rem',
    fontWeight: 600,
    textAlign: 'center',
    color: 'white',
    width: 600,
    position: 'absolute',
   
  },
  zero: {
    width: '100%',
    marginTop:'2rem',
    marginBottom:'2rem',
    backgroundColor: 'white',
    borderRadius: '1.25rem',
    marginTop: '1.25rem',
    boxShadow: '5px 10px 5px 10px #f0f0f0'
  },
  first: {
    display: 'flex',
    justifyContent: 'center',
    margin: '2rem',
    borderRadius:'1.25rem',
    boxShadow: '5px 10px 5px 10px #e6f7ff'
    
  },
  secound: {
    margin: '2rem',
    borderRadius:'1.25rem',
    boxShadow: '5px 10px 5px 10px #f0f0f0'
  },
  OppCon:{
    borderRadius:'1.25rem',
    boxShadow: '5px 5px 5px 5px #f0f0f0'

  },
  third: {
    borderRadius:'1.25rem',
    width:"100%",
    boxShadow: '5px 10px 5px 5px #f0f0f0'
  },
  fourth: {
    borderRadius:'1rem',
    width:"100%",
    boxShadow: '5px 10px 5px 5px #f0f0f0'
  },
  thirdfourthContainer: {
    marginTop:'2rem',
    marginBottom:'4rem',
    display: 'flex',
    borderRadius:'1.25rem',
    boxShadow: '5px 10px 5px 10px #e6f7ff',
    width: '100%',
   
  },
}))
export default function App() {
  const classes = useStyles()

  const [stay, setStay] = useState(['2020-01-01', '2020-12-31'])
  const handleDateChange = (NewDate1) => {
    const checkIn = NewDate1[0]
    const checkOut = NewDate1[1]
    console.log(stay, 'date')
    setStay(NewDate1)
  }

  return (
    <React.Fragment>
      <CssBaseline />

      <Container fixed className={classes.root}>
        <div className={classes.firstCon}>
          <div className={classes.headline}>
            <h2>Account Management dashboard</h2>
          </div>
        </div>
        <div className={classes.dateCon}>
          <DateSelection onChange={handleDateChange} />
        </div>

        <div className={classes.zero}>
          <HealthMeter />
        </div>

        <div className={classes.first}>
          <div className={classes.secound}>
            <ChannelsRev />
          </div>
          <div className={classes.OppCon}>
            <ChannelOpp />
            <ChannelOpp />
          </div>
        </div>
        <div className={classes.thirdfourthContainer}>
          <div className={classes.third}>
            <AVGLOSvsBOOK range={stay} />
          </div>
          <div className={classes.fourth}>
            <div>
              <AverageDaily range={stay}/>
            </div>
            <div>
              {' '}
              <TripleValueComp range={stay} />
            </div>
          </div>
        </div>
      </Container>
    </React.Fragment>
  )
}
