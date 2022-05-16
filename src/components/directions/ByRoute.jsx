import React, { useState, useEffect } from 'react'
import { useInput } from '../../hooks'
import { useSelector } from 'react-redux'
import Stops from './Stops'
import Routes from './Routes'
import Directions from './Directions'
import Container from '@mui/material/Container'
import { useLocation } from 'react-router-dom'
import { getDirections, getStops, getDepartures } from '../../services'

export default function FindByRoute({ setNextTrips }) {
  const [stops, setStops] = useState([])
  const [directions, setDirections] = useState([])
  const { pathname } = useLocation()
  const routes = useSelector((state) => state.routes)

  const [{ route, direction, stop }, handleChange] = useInput({
    route: '',
    direction: '',
    stop: '',
  })

  // watching for changes on route
  useEffect(() => {
    if (route === '') return

    // reset directions, stops and departures on route change
    setDirections([])
    setStops([])
    setNextTrips(null)
    handleChange({ target: { name: 'direction', value: '' } })

    // then fetch new directions
    const fetch = async () => {
      const data = await getDirections(route)
      if (data) {
        setDirections(data)
      }
    }
    fetch()
  }, [route])

  // watching for changes on direction
  useEffect(() => {
    if (direction === '') return

    // reset stops and departures on direction change
    setStops([])
    setNextTrips(null)
    handleChange({ target: { name: 'stop', value: '' } })

    // then fetch new stops data
    const fetch = async () => {
      const data = await getStops(route, direction)
      if (data) {
        setStops(data)
      }
    }
    fetch()
  }, [direction])

  // watching for changes of tops
  useEffect(() => {
    if (stop === '') return

    // fetch and render new departures
    const fetch = async () => {
      const data = await getDepartures(stop, route, direction)
      if (data) {
        setNextTrips(data)
      }
    }
    fetch()
  }, [stop])

  return (
    <>
      {['/route', '/'].includes(pathname) ? (
        <Container maxWidth="sm">
          <Routes route={route} routes={routes} handleChange={handleChange} />
          {directions.length > 0 && (
            <Directions
              direction={direction}
              directions={directions}
              handleChange={handleChange}
            />
          )}
          {stops.length > 0 && (
            <Stops stop={stop} stops={stops} handleChange={handleChange} />
          )}
        </Container>
      ) : null}
    </>
  )
}
