import { useEffect } from 'react'
import './App.css'
import { getRoutes } from './services'
import { useDispatch } from 'react-redux'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import CssBaseline from '@mui/material/CssBaseline'
import Trains from './components/directions/Trains'
import { useNavigate, useLocation } from 'react-router-dom'

function App() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { pathname } = useLocation()

  useEffect(() => {
    dispatch(getRoutes())

    if (pathname === '/') navigate('/route')
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <h1 className="nextTrip_title">NexTrip</h1>
      </header>
      <main>
        <>
          <CssBaseline />
          <Container maxWidth="1140px" sx={{ padding: '60px 0' }}>
            <Typography
              variant="h4"
              gutterBottom
              component="div"
              sx={{ marginBottom: '3rem' }}
            >
              Real-time Departures
            </Typography>
            <Trains />
          </Container>
        </>
      </main>
    </div>
  )
}
export default App
