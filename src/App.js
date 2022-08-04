import React, { useState } from 'react'
import './App.css'
import { STEPS } from './utilites/steps'
import { FormStepContext } from './utilites/FormStepContext'
import VehicleDetails from './components/VehicleDetails'
import { ApplicationRootStyles } from './styling/styles'
import PersonalDetails from './components/PersonalDetails'
import Confirmation from './components/Confirmation'
import Scheduler from './components/Scheduler'
import helper from './utilites/helper'

function App() {
  const [step, setStep] = useState(STEPS.VEHICLE)

  return (
    <FormStepContext.Provider value={{ step, setStep }}>
      <ApplicationRootStyles>{helper(step)}</ApplicationRootStyles>
    </FormStepContext.Provider>
  )
}

export default App
