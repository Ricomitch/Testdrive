import React from 'react'
import Confirmation from '../components/Confirmation'
import PersonalDetails from '../components/PersonalDetails'
import Scheduler from '../components/Scheduler'
import VehicleDetails from '../components/VehicleDetails'
import { STEPS } from './steps'

const helper = (step) => {
  switch (step) {
    case STEPS.VEHICLE:
      return <VehicleDetails />
    case STEPS.SCHEDULER:
      return <Scheduler />
    case STEPS.PERSONAL:
      return <PersonalDetails />
    case STEPS.SUCCESS:
      return <Confirmation />
    default:
      return <h1>Invalid Step. Please refresh the page</h1>
  }
}

export default helper
