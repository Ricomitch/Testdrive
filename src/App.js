import React from 'react'
import './App.css'
import VehicleDetails from './components/VehicleDetails'
import { ApplicationRootStyles } from './styling/styles'
import PersonalDetails from './components/PersonalDetails'
import Confirmation from './components/Confirmation'
import Scheduler from './components/Scheduler'

function App() {
  return (
    <ApplicationRootStyles>
      <Scheduler />
    </ApplicationRootStyles>
  )
}

export default App
