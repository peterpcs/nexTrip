import React from 'react'

import Select from '@mui/material/Select'
import MenuItem from '@mui/material/MenuItem'
import InputLabel from '@mui/material/InputLabel'
import FormControl from '@mui/material/FormControl'
import OutlinedInput from '@mui/material/OutlinedInput'

export default function Stops({ stop, stops, handleChange }) {
  return (
    <FormControl
      fullWidth
      sx={{ margin: '10px 0', textAlign: 'left', maxWidth: '570px' }}
    >
      <InputLabel id="stop-select-label">Select stop</InputLabel>
      <Select
        data-testid="stop"
        input={<OutlinedInput label="Select stop" />}
        labelId="stop-select-label"
        id="stop-select"
        value={stop}
        label="Stop"
        name="stop"
        onChange={handleChange}
      >
        <MenuItem disabled value="">
          <em>Select</em>
        </MenuItem>
        {stops.map(({ description, place_code }) => (
          <MenuItem key={place_code} value={place_code}>
            {description}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  )
}
