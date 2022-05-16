import * as React from 'react'
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom/extend-expect'
import {
  render,
  screen,
} from '@testing-library/react'
import Routes from './Routes'

const handleChange = jest.fn()
const routeId = '901'
const routes = [
  {
    route_id: '901',
    agency_id: 0,
    route_label: 'METRO Blue Line',
  },
  {
    route_id: '902',
    agency_id: 0,
    route_label: 'METRO Green Line',
  },
]

test('renders routes', async () => {
  render(<Routes route={routeId} routes={routes} handleChange={handleChange} />)

  const routeSelect = await screen.findByTestId(/route/i)
  userEvent.click(routeSelect)
  expect(await screen.findByText(/METRO Blue Line/i)).toBeInTheDocument()
})
