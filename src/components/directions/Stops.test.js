import * as React from 'react'
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom/extend-expect'
import { render, screen } from '@testing-library/react'
import Stops from './Stops'

const handleChange = jest.fn()
const place_code = 'MAAM'
const stops = [
  {
    place_code: 'MAAM',
    description: 'Mall of America Station',
  },
  {
    place_code: '28AV',
    description: '28th Ave Station',
  },
]

test('renders stops', async () => {
  render(<Stops stop={place_code} stops={stops} handleChange={handleChange} />)

  const stopSelect = await screen.findByTestId(/stop/i)
  userEvent.click(stopSelect)
  screen.getByText('Mall of America Station')
})
