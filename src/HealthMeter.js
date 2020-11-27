import React, { useEffect, useState } from 'react'
import ProgressBar from 'react-bootstrap/ProgressBar'
import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp';

const activeStatus = {
  totalNumber: 10000,
  Active: 6500,
  Inactive: 3500,
}

export const HealthMeter = () => {
  const [data, setData] = useState({})

  useEffect(() => {
    function getData(listingStatus) {
      const success = (listingStatus.Active / listingStatus.totalNumber) * 100
      const failed = (listingStatus.Inactive / listingStatus.totalNumber) * 100
      setData({
        success: success,
        failed: failed,
      })
    }
    const res = getData(activeStatus)
  
  }, [])
  return (
    <div>
      <h5> Active vs Inactive status</h5>
      <div><h5>24 hours Last change: <ArrowDropUpIcon style={{color:'green'}}/>1400 properties</h5> </div>
      <ProgressBar>
      <ProgressBar variant="success" now={data.success} label={`${data.success}%`} key={1} />;
      <ProgressBar  variant="danger" label={`${data.failed}%`} now={data.failed} key={2} />
      </ProgressBar>
    </div>
  )
}
