import * as React from 'react'
import '@testing-library/jest-dom/extend-expect'
import Departures from './Departures'
import renderer from 'react-test-renderer'

const nextTrips = {
  stops: [
    {
      stop_id: 51405,
      latitude: 44.854277,
      longitude: -93.238877,
      description: 'MOA Transit Station',
    },
  ],
  alerts: [],
  departures: [
    {
      actual: true,
      trip_id: '20521637-MAR22-RAIL-Weekday-01',
      stop_id: 51405,
      departure_text: '11 Min',
      departure_time: 1652725200,
      description: 'to Mpls-Target Field',
      route_id: '901',
      route_short_name: 'Blue',
      direction_id: 0,
      direction_text: 'NB',
      schedule_relationship: 'Scheduled',
    },
    {
      actual: false,
      trip_id: '20521638-MAR22-RAIL-Weekday-01',
      stop_id: 51405,
      departure_text: '1:32',
      departure_time: 1652725920,
      description: 'to Mpls-Target Field',
      route_id: '901',
      route_short_name: 'Blue',
      direction_id: 0,
      direction_text: 'NB',
      schedule_relationship: 'Scheduled',
    },
    {
      actual: false,
      trip_id: '20521636-MAR22-RAIL-Weekday-01',
      stop_id: 51405,
      departure_text: '1:44',
      departure_time: 1652726640,
      description: 'to Mpls-Target Field',
      route_id: '901',
      route_short_name: 'Blue',
      direction_id: 0,
      direction_text: 'NB',
      schedule_relationship: 'Scheduled',
    },
    {
      actual: false,
      trip_id: '20521639-MAR22-RAIL-Weekday-01',
      stop_id: 51405,
      departure_text: '1:56',
      departure_time: 1652727360,
      description: 'to Mpls-Target Field',
      route_id: '901',
      route_short_name: 'Blue',
      direction_id: 0,
      direction_text: 'NB',
      schedule_relationship: 'Scheduled',
    },
    {
      actual: false,
      trip_id: '20521640-MAR22-RAIL-Weekday-01',
      stop_id: 51405,
      departure_text: '2:08',
      departure_time: 1652728080,
      description: 'to Mpls-Target Field',
      route_id: '901',
      route_short_name: 'Blue',
      direction_id: 0,
      direction_text: 'NB',
      schedule_relationship: 'Scheduled',
    },
    {
      actual: false,
      trip_id: '20521641-MAR22-RAIL-Weekday-01',
      stop_id: 51405,
      departure_text: '2:20',
      departure_time: 1652728800,
      description: 'to Mpls-Target Field',
      route_id: '901',
      route_short_name: 'Blue',
      direction_id: 0,
      direction_text: 'NB',
      schedule_relationship: 'Scheduled',
    },
    {
      actual: false,
      trip_id: '20521642-MAR22-RAIL-Weekday-01',
      stop_id: 51405,
      departure_text: '2:32',
      departure_time: 1652729520,
      description: 'to Mpls-Target Field',
      route_id: '901',
      route_short_name: 'Blue',
      direction_id: 0,
      direction_text: 'NB',
      schedule_relationship: 'Scheduled',
    },
    {
      actual: false,
      trip_id: '20521643-MAR22-RAIL-Weekday-01',
      stop_id: 51405,
      departure_text: '2:44',
      departure_time: 1652730240,
      description: 'to Mpls-Target Field',
      route_id: '901',
      route_short_name: 'Blue',
      direction_id: 0,
      direction_text: 'NB',
      schedule_relationship: 'Scheduled',
    },
    {
      actual: false,
      trip_id: '20521644-MAR22-RAIL-Weekday-01',
      stop_id: 51405,
      departure_text: '2:56',
      departure_time: 1652730960,
      description: 'to Mpls-Target Field',
      route_id: '901',
      route_short_name: 'Blue',
      direction_id: 0,
      direction_text: 'NB',
      schedule_relationship: 'Scheduled',
    },
    {
      actual: false,
      trip_id: '20521645-MAR22-RAIL-Weekday-01',
      stop_id: 51405,
      departure_text: '3:08',
      departure_time: 1652731680,
      description: 'to Mpls-Target Field',
      route_id: '901',
      route_short_name: 'Blue',
      direction_id: 0,
      direction_text: 'NB',
      schedule_relationship: 'Scheduled',
    },
  ],
}

test('renders departures correctly', () => {
  const tree = renderer.create(<Departures nextTrips={nextTrips} />).toJSON()
  expect(tree).toMatchSnapshot()
})
