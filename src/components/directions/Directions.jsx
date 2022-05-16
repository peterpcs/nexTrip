import React from 'react'
import Select from '@mui/material/Select'
import MenuItem from '@mui/material/MenuItem'
import InputLabel from '@mui/material/InputLabel'
import FormControl from '@mui/material/FormControl'
import OutlinedInput from '@mui/material/OutlinedInput'

export default function Directions({ direction, directions, handleChange }) {
  return (
    <FormControl
      fullWidth
      sx={{ margin: '10px 0', textAlign: 'left', maxWidth: '570px' }}
    >
      <InputLabel id="direction-select-label">Select direction</InputLabel>
      <Select
        data-testid="direction"
        input={<OutlinedInput label="Select direction" />}
        labelId="direction-select-label"
        id="direction-select"
        value={direction}
        label="Direction"
        name="direction"
        onChange={handleChange}
      >
        <MenuItem disabled value="">
          <em>Select</em>
        </MenuItem>
        {directions.map(({ direction_id, direction_name }) => (
          <MenuItem key={direction_id} value={direction_id}>
            {direction_name}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  )
}
