import React from 'react'
import App from './App'
import store from './store'
import { Provider } from 'react-redux'
import FindByRoute from './components/directions/ByRoute'
import FindByStop from './components/directions/ByStop'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

export default function NexTripApp() {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/" element={<App />}>
            <Route path="route" element={<FindByRoute />} />
            <Route path="stop" element={<FindByStop />} />
            <Route index element={<FindByRoute />} />
          </Route>
        </Routes>
      </Router>
    </Provider>
  )
}
