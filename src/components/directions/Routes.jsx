import React from 'react'
import Select from '@mui/material/Select'
import MenuItem from '@mui/material/MenuItem'
import InputLabel from '@mui/material/InputLabel'
import FormControl from '@mui/material/FormControl'
import OutlinedInput from '@mui/material/OutlinedInput'

export default function Routes({ route, routes, handleChange }) {
  return (
    <FormControl
      fullWidth
      sx={{ margin: '10px 0', textAlign: 'left', maxWidth: '570px' }}
    >
      <InputLabel id="route-select-label">Select route</InputLabel>
      <Select
        data-testid="route"
        input={<OutlinedInput label="Select route"/>}
        labelId="route"
        id="route-select"
        value={route}
        label="Route"
        name="route"
        onChange={handleChange}
      >
        <MenuItem disabled value="">
          <em>Select</em>
        </MenuItem>
        {routes.map(({ route_id, route_label }) => (
          <MenuItem key={route_id} value={route_id}>
            {route_label}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  )
}
