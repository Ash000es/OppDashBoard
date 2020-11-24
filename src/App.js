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

export default function App() {
  return (
    <React.Fragment>
      <CssBaseline />

      <Container fixed className="App">
        <h1>Account Management dashboard</h1>
        <div><HealthMeter /></div>
        <div><ChannelOpp /></div>
        <div><ChannelsRev /></div>
        <div><AVGLOSvsBOOK /></div>
        <div><AverageDaily /></div>
        <div> <TripleValueComp /></div>

       
      </Container>
    </React.Fragment>
  )
}
