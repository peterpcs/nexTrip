import React from 'react'
import Paper from '@mui/material/Paper'
import InputBase from '@mui/material/InputBase'
import IconButton from '@mui/material/IconButton'
import SearchIcon from '@mui/icons-material/Search'
import CardContent from '@mui/material/CardContent'
import { useInput } from '../../hooks'
import { getDepartures } from '../../services'
import { useLocation } from 'react-router-dom'

export default function FindByStop({ setNextTrips }) {
  const [{ stopId }, handleChange] = useInput({ stopId: '' })
  const { pathname } = useLocation()

  const getNextTrips = async () => {
    const data = await getDepartures(stopId)
    if (data) {
      setNextTrips(data)
    }
  }

  const handleSearch = (e) => {
    e.preventDefault()
    if (stopId === '') return

    getNextTrips()
  }

  return (
    <>
      {pathname === '/stop' ? (
        <CardContent>
          <Paper
            component="form"
            sx={{
              p: '2px 4px',
              display: 'flex',
              alignItems: 'center',
              width: 515,
              height: 60,
              margin: 'auto',
              boxShadow: 'none',
              border: '1px solid rgb(0 0 0 / 30%)',
            }}
          >
            <InputBase
              sx={{ ml: 1, flex: 1 }}
              type="number"
              id="filled-required"
              placeholder="Enter stop number"
              onChange={handleChange}
              name="stopId"
              value={stopId}
            />
            <IconButton
              onClick={handleSearch}
              type="submit"
              sx={{ p: '10px' }}
              aria-label="search"
            >
              <SearchIcon />
            </IconButton>
          </Paper>
        </CardContent>
      ) : null}
    </>
  )
}
