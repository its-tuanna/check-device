import React, { useEffect, useState } from 'react'
import { requestVideoPermission, getDevices, returnGetDevices } from '../helpers/video'

const CheckDevice = () => {
  const [devices, setDevices] = useState<MediaDeviceInfo[]>([]);

  const startCheck = async () => {
    await requestVideoPermission();
    console.log('---------------------------------------------------------------------------------------------------------------------------------------------------');
    getDevices();
    const devicesReturned = await returnGetDevices();
    setDevices(devicesReturned);
  }

  useEffect(() => {
    startCheck();
  }, [])



  return (
    <div>
      <div>CheckDevice</div>
      <div>{devices.map((device, index) => <p key={index}>{JSON.stringify(device, null, 2)}</p>)}</div>
    </div>
  )
}

export default CheckDevice