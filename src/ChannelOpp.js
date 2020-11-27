import React, { useEffect, useState } from 'react'
import { data } from './data/channeloppdata'
import { Tooltip, Legend, Bar, RadialBarChart, RadialBar } from 'recharts'

export const ChannelOpp = () => {
  

  return (
    <div style={{border:'2px solid black', marginTop:'0.5rem'}}>
      <h4> Percentage of active properties on channel</h4>
      <RadialBarChart
        width={500}
        height={250}
        innerRadius="30%"
        outerRadius="100%"
        data={data}
        startAngle={180}
        endAngle={0}
        barCategoryGap="20%"
        barGap={4}
      >
        <RadialBar
          minAngle={15}
          label={{ fill: '#666', position: 'insideStart' }}
          background
          clockWise={true}
          dataKey="Percent"
        />
        <Legend
          iconSize={20}
          width={230}
          height={250}
          layout="vertical"
          verticalAlign="middle"
          align="left"
        />
        <Tooltip />
      </RadialBarChart>
    </div>
  )
}
