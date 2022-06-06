import React, { useEffect } from 'react'
import { requestVideoPermission, getDevices } from '../helpers/video'

const CheckDevice = () => {

  const startCheck = async () => {
    await requestVideoPermission();
    console.log('---------------------------------------------------------------------------------------------------------------------------------------------------');
    getDevices();
  }

  useEffect(() => {
    startCheck();
  }, [])

  return (
    <div>CheckDevice</div>
  )
}

export default CheckDevice