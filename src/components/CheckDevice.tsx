import React, { useEffect, useState } from 'react'
import { requestVideoPermission, getDevices, returnGetDevices, returnVideoTracks } from '../helpers/video'

const CheckDevice = () => {
  const [devices, setDevices] = useState<MediaDeviceInfo[]>([]);
  const [videoTracks, setVideoTracks] = useState<MediaStreamTrack[]>([])

  const startCheck = async () => {
    const videoTracksReturned = await returnVideoTracks();
    setVideoTracks(videoTracksReturned);
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
      <hr />
      <hr />
      <div>{videoTracks.map((videoTrack, index) => <div key={index}><p>Camera {videoTrack.getSettings().deviceId} has facingMode {videoTrack.getSettings().facingMode}</p>
        <ul>
          <li>Width: {videoTrack.getSettings().width}</li>
          <li>Height: {videoTrack.getSettings().height}</li>
        </ul></div>)}</div>
    </div>
  )
}

export default CheckDevice