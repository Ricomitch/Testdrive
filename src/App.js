import React from 'react'
import './App.css'
import VehicleDetails from './components/VehicleDetails'
import { ApplicationRootStyles } from './styling/styles'
import DateDetails from './components/DateDetails'

function App() {
  return (
    <ApplicationRootStyles>
      <VehicleDetails />
      <DateDetails />
    </ApplicationRootStyles>
  )
}

export default App
