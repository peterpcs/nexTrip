import axios from 'axios'
import { SET_ROUTES } from '../store/actions'

export const getRoutes = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get(
        'https://svc.metrotransit.org/nextripv2/routes'
      )

      dispatch({
        type: SET_ROUTES,
        routes: response.data,
      })
    } catch (err) {
      console.error(err)
    }
  }
}

export const getDirections = async (routeId) => {
  try {
    const response = await axios.get(
      `https://svc.metrotransit.org/nextripv2/directions/${routeId}`
    )

    return response.data
  } catch (err) {
    console.error(err)
  }
}

export const getStops = async (routeId, dirId) => {
  try {
    const response = await axios.get(
      `https://svc.metrotransit.org/nextripv2/stops/${routeId}/${dirId}`
    )

    return response.data
  } catch (err) {
    console.error(err)
  }
}
export const getDepartures = async (stopId, routeId, dirId) => {
  const url =
    routeId !== undefined && dirId !== undefined
      ? `https://svc.metrotransit.org/nextripv2/${routeId}/${dirId}/${stopId}`
      : `https://svc.metrotransit.org/nextripv2/${stopId}`

  try {
    const response = await axios.get(url)

    return response.data
  } catch (err) {
    return err.response.data
  }
}
