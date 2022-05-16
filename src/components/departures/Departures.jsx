import React from 'react'
import StopDescription from './StopDescription'
import StopDepartures from './StopDepartures'

export default function Departures(props) {
  return (
    <div id="nextripDepartures" className="nextrip-departures">
      <div className="card mb-3 p-3 p-md-3">
        <StopDescription {...props} />
        <StopDepartures {...props} />
      </div>
    </div>
  )
}
