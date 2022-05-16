import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import Box from '@mui/material/Box'
import FindByRoute from './ByRoute'
import FindByStop from './ByStop'
import Departures from '../departures/Departures'

export default function Trains() {
  const [nextTrips, setNextTrips] = useState(null)

  return (
    <>
      <Box
        sx={{
          width: '100%',
          bgcolor: 'background.paper',
          marginBottom: '2rem',
        }}
      >
        <NavLink className="nextrip-tab" key="route" to={'/route'}>
          By route
        </NavLink>
        <NavLink className="nextrip-tab" key="stop" to={'/stop'}>
          By stop #
        </NavLink>
      </Box>

      <Box sx={{ marginBottom: '2rem' }}>
        <FindByRoute setNextTrips={setNextTrips} />
        <FindByStop setNextTrips={setNextTrips} />
      </Box>

      {nextTrips && <Departures nextTrips={nextTrips} />}
    </>
  )
}
