import * as React from 'react'
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom/extend-expect'
import { render, screen } from '@testing-library/react'
import Directions from './Directions'

const handleChange = jest.fn()
const directionId = 0
const directions = [
  {
    direction_id: 0,
    direction_name: 'Northbound',
  },
  {
    direction_id: 1,
    direction_name: 'Southbound',
  },
]

test('renders directions', async () => {
  render(
    <Directions
      direction={directionId}
      directions={directions}
      handleChange={handleChange}
    />
  )

  const directionSelect = await screen.findByTestId(/direction/i)
  userEvent.click(directionSelect)
  await screen.findByText(/Northbound/i)
})
