import React,{useEffect,useState} from 'react'
import {parse,Papa} from 'papaparse'
import { readString } from 'react-papaparse'
import{ChannelOpp} from './ChannelOpp'
import {AverageDaily} from './AveragDaily'
import {AVGLOSvsBOOK} from './AVGlosAVGbook'
import {TripleValueComp}from './TripleValuesComp'
import {ChannelsRev}from './ChannelsRev'
import './App.css';

export default function App() {

 
  return (
    <div className="App">
      <h1>Property Manger opps center</h1>
      <AverageDaily/>
      <ChannelOpp/>
      <ChannelsRev/>
      <AVGLOSvsBOOK/>
      <TripleValueComp/>
      

  
  
  
    </div>
  );
}


