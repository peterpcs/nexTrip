import * as React from 'react'
import NexTripApp from './NexTripApp'
import { rest } from 'msw'
import { setupServer } from 'msw/node'
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom/extend-expect'
import { render, screen } from './test-utils'
import renderer from 'react-test-renderer'

const route = {
  route_id: '901',
  agency_id: 0,
  route_label: 'METRO',
}
const routes = [
  {
    ...route,
  },
]

const handlers = [
  rest.get('https://svc.metrotransit.org/nextripv2/routes', (req, res, ctx) => {
    return res(ctx.json(routes))
  }),
]

const server = setupServer(...handlers)

beforeAll(() => server.listen())
afterEach(() => server.resetHandlers())
afterAll(() => server.close())

test('renders nexTrip app', () => {
  render(<NexTripApp />)
  expect(screen.getByText(/NexTrip/i)).toBeInTheDocument()
  expect(screen.getByText(/By route/i)).toBeInTheDocument()
  expect(screen.getByText(/By stop/i)).toBeInTheDocument()
})

test('renders correctly', () => {
  const tree = renderer.create(<NexTripApp />).toJSON()
  expect(tree).toMatchSnapshot()
})

test('expect by-route tab to be active by default', () => {
  render(<NexTripApp />)

  const routeTabElement = screen.getByText(/By route/i)
  expect(routeTabElement).toBeInTheDocument()
  expect(routeTabElement.classList.contains('active')).toBe(true)
})

test('tab should be active on click', () => {
  render(<NexTripApp />)

  const stopTabElement = screen.getByText(/By stop/i)
  expect(stopTabElement).toBeInTheDocument()
  userEvent.click(stopTabElement)
  expect(stopTabElement.classList.contains('active')).toBe(true)

  const routeTabElement = screen.getByText(/By route/i)
  expect(routeTabElement).toBeInTheDocument()
  userEvent.click(routeTabElement)
  expect(routeTabElement.classList.contains('active')).toBe(true)
})
